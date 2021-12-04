function generateHeader(index) {
  const asciiFirstLetter = 65;
  const lettersCount = 26;
  let div = index + 1;
  let label = '';
  let pos;
  while (div > 0) {
      pos = (div - 1) % lettersCount;
      label = String.fromCharCode(asciiFirstLetter + pos) + label;
      div = parseInt(((div - pos) / lettersCount).toString(), 10);
  }
  return label;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export default function generateFakeDataObject(rows, colsNumber) {
	const defColumns = [
		{
			name: 'Name',
			prop: 'name',
			sortable: true,
			order: 'asc',
			size: 200
		},
		{
			name: 'Personal',
			children: [
				{
					name: 'Age',
					prop: 'age',
					size: 100
				},
				{
					name: 'Eyes',
					prop: 'eyeColor',
					sortable: true,
					cellTemplate: (createElement, props) => (createElement('span', {
						class: 'bubble',
						style: {
								backgroundColor: props.model[props.prop]
						},
				}, props.model[props.prop])
			)
				},
			]
		}
	];
  const result = [...rows];
  const columns = [...defColumns];

  for (let j = 0; j < colsNumber; j++) {
      columns.push({
          name: generateHeader(j),
		  prop: j,
		  size: 50
      });
  }

  for (let i in result) {
      result[i]['highlighted'] = result[i]['eyeColor'];
      for (let j = 0; j < colsNumber; j++) {
          result[i][j] = `${i}:${j}`;
      }
  }
  const pinnedTopRows = result[10] && [result[10]] || [];
  const pinnedBottomRows = result[1] && [result[1]] || [];

  return {
    source: result,
    pinnedTopRows,
    pinnedBottomRows,
    columns,
  };
}

export function generateFakeDataDemo(rows, colsNumber) {
	const defColumns = [{
	
		children: [{
			name: 'Name',
			prop: 'name',
			rowDrag: true,
			sortable: true,
			order: 'asc',
			pin: 'colPinStart',

			size: 200
		},
		{
			pin: 'colPinStart',
					sortable: true,
					name: 'Company',
					prop: 'company',
					size: 200,
				}]},
		{
			name: 'Personal',
			children: [
				{
					sortable: true,
					name: 'Age',
					prop: 'age',
					pin: 'colPinEnd',
				},
				
				{
					name: 'Eyes',
					prop: 'eyeColor',
					sortable: true,
					cellTemplate: (createElement, props) => (createElement('span', {
						class: 'bubble',
						style: {
								backgroundColor: props.model[props.prop]
						},
				}, props.model[props.prop])
			)
				},
			]
		}
	];

	const result = [...rows];
	const columns = [...defColumns];
	const nameColumn = columns[0];
	nameColumn.autoSize = true;
	nameColumn.name = 'Funcionario'

	const companies = Object.keys(rows.reduce((r, p) => {
        r[p.company] = p.company;
        return r;
	  }, {}));
	const companyColumn = columns[0].children[1];  
	columns[0].children[1] = {
		...companyColumn,
		columnType: 'select',
		source: companies,
	};

	columns.push({
		name: 'Birth date',
		prop: 'date',
		columnType: 'date',
		size: 150
	});
  
	for (let j = 0; j < colsNumber; j++) {
		columns.push({
			name: generateHeader(j),
			prop: j,
			columnType: 'number'
		});
	}
  
	for (let i in result) {
		result[i]['highlighted'] = result[i]['eyeColor'];
		result[i]['date'] = '2020-08-24';
		for (let j = 0; j < colsNumber; j++) {
			result[i][j] = getRandomArbitrary(0, 10000);
		}
	}
  
	return {
	  source: result,
	  columns,
	};
  }