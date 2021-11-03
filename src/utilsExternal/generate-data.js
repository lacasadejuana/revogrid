import { realEstateSample } from './realEstateSample.js';
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
  return label.toLowerCase();
}

function naturalSort(prop, a, b) {

  return a[prop].localeCompare(b[prop], "en", { numeric: true });
}

const DEFAULT_CONFIG = {
  topPinned: [],
  groupedHeader: false,
  bottomPinned: [],
  colPinStart: [],
  colPinEnd: [],
  rowDrag: 0,
  rows: 0,
  cols: 0,
  order: undefined,
};


export function generateFakeDataObject(config = {}) {
  const rxealEstateSample = [
    {
      "LicNumber": "CO000004000",
      "LegalName": "ABRAMS REALTY & MANAGEMENT, INC.",
      "Address1": "3233 W. PEORIA AVENUE",
      "OriginalDate": "1/1/1972",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 264-6464"
    },
    {
      "LicNumber": "CO000010000",
      "LegalName": "ALLAN C JEFFRYES REALTY, INC.",
      "Address1": "116 EWAGON WHEEL DR",
      "OriginalDate": "1/1/1962",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 279-4988"
    },
    {
      "LicNumber": "CO000016000",
      "LegalName": "ARENA REALTY, INC.",
      "Address1": "3941 N Calle Barranco",
      "OriginalDate": "3/25/1977",
      "ExpireDate": "3/31/2022",
      "LicStatus": "Inactive",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": 5206092820
    },
    {
      "LicNumber": "CO000021000",
      "LegalName": "ARIZONA INDUSTRIAL PROPERTIES, INC.",
      "Address1": "5100 N. 40th St.",
      "OriginalDate": "4/22/1977",
      "ExpireDate": "4/30/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 438-8000"
    },
    {
      "LicNumber": "CO000029000",
      "LegalName": "BASSETT PROPERTY COMPANY",
      "Address1": "3567 E SUNRISE DR  SUITE 219",
      "OriginalDate": "1/31/1977",
      "ExpireDate": "1/31/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 529-2822"
    },
    {
      "LicNumber": "CO000038000",
      "LegalName": "BILTMORE PROPERTIES, INC.",
      "Address1": "2330 W MISSION LN  SUITE 10",
      "OriginalDate": "12/20/1976",
      "ExpireDate": "1/31/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 997-0013"
    },
    {
      "LicNumber": "CO000043000",
      "LegalName": "BROADWAY REALTY AND TRUST, INC.",
      "Address1": "4855 E BROADWAY  SUITE 103",
      "OriginalDate": "1/1/1972",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 747-5700"
    },
    {
      "LicNumber": "CO000050000",
      "LegalName": "RICHMOND AMERICAN HOMES OF ARIZONA, INC.",
      "Address1": "16427 N Scottsdale Rd",
      "OriginalDate": "9/19/1984",
      "ExpireDate": "2/28/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": 4806240224
    },
    {
      "LicNumber": "CO000054000",
      "LegalName": "CHUMBLER'S REALTY, INC.",
      "Address1": "3834 S 6TH AVE",
      "OriginalDate": "3/17/2010",
      "ExpireDate": "9/30/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 294-7600"
    },
    {
      "LicNumber": "CO000057000",
      "LegalName": "CONSOLIDATED BROKERAGE CO.",
      "Address1": "6499 S. Kings Ranch Road",
      "OriginalDate": "1/1/1961",
      "ExpireDate": "2/28/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 251-1239"
    },
    {
      "LicNumber": "CO000058000",
      "LegalName": "CONTINENTAL LAND & INVESTMENT CORPORATION",
      "Address1": "2945 Maricopa Ave.",
      "OriginalDate": "2/1/1975",
      "ExpireDate": "11/30/2021",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(928) 680-6000"
    },
    {
      "LicNumber": "CO000064000",
      "LegalName": "CUSHMAN & WAKEFIELD OF ARIZONA, INC.",
      "Address1": "2555 E. CAMELBACK ROAD #400",
      "OriginalDate": "3/18/1987",
      "ExpireDate": "2/28/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "602-229-5912"
    },
    {
      "LicNumber": "CO000073000",
      "LegalName": "HEIPLE REAL ESTATE SERVICES, INC.",
      "Address1": "3438 E. Pyrenees Pass",
      "OriginalDate": "1/13/1969",
      "ExpireDate": "5/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 943-0640"
    },
    {
      "LicNumber": "CO000078000",
      "LegalName": "FARNSWORTH DEVELOPMENT COMPANY",
      "Address1": "460 S GREENFIELD RD  STE 1",
      "OriginalDate": "1/1/1959",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(480) 830-7784"
    },
    {
      "LicNumber": "CO000079000",
      "LegalName": "FEDERAL LAND EXCHANGE, INC.",
      "Address1": "19887 E MAYBERRY RD",
      "OriginalDate": "1/15/2020",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(480) 325-6071"
    },
    {
      "LicNumber": "CO000082000",
      "LegalName": "FIRST AMERICAN REALTY & DEVELOPMENT CO., INC.",
      "Address1": "8830 E SPEEDWAY",
      "OriginalDate": "7/15/1974",
      "ExpireDate": "12/31/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 296-5491"
    },
    {
      "LicNumber": "CO000099000",
      "LegalName": "FAIRFIELD FLAGSTAFF REALTY, INC.",
      "Address1": "2445 W RTE 89 A STE-2",
      "OriginalDate": "2/16/1988",
      "ExpireDate": "3/31/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(928) 203-9744"
    },
    {
      "LicNumber": "CO000108000",
      "LegalName": "HEYWOOD REALTY AND INVESTMENT, INC.",
      "Address1": "42 S HAMILTON PLACE STE-101",
      "OriginalDate": "1/1/1970",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(480) 820-1519"
    },
    {
      "LicNumber": "CO000129000",
      "LegalName": "KELLEY REALTY, INC.",
      "Address1": "4049 N ROMERO RD",
      "OriginalDate": "2/9/1973",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 275-9035"
    },
    {
      "LicNumber": "CO000139000",
      "LegalName": "LYONS ROMO, INC.",
      "Address1": "2730 E BROADWAY",
      "OriginalDate": "1/13/1977",
      "ExpireDate": "1/31/2008",
      "LicStatus": "Inactive",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 327-6000"
    },
    {
      "LicNumber": "CO000142000",
      "LegalName": "MARSHALL PROPERTIES, INC.",
      "Address1": "21424 N. 7th Avenue, Suite 12",
      "OriginalDate": "2/1/1983",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 263-8811"
    },
    {
      "LicNumber": "CO000153000",
      "LegalName": "NATIONAL REALTY CO., INC.",
      "Address1": "6318 EAST SAGE DR",
      "OriginalDate": "4/17/1972",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 421-2047"
    },
    {
      "LicNumber": "CO000160000",
      "LegalName": "PASSEY REALTY & INVESTMENT CO, INC.",
      "Address1": "24 NORTH CENTER STREET",
      "OriginalDate": "1/1/1972",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(480) 834-8181"
    },
    {
      "LicNumber": "CO000172000",
      "LegalName": "RANDALL REALTY AND INSURANCE",
      "Address1": "3047 S KINNEY RD",
      "OriginalDate": "2/1/1974",
      "ExpireDate": "12/31/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 883-5440"
    },
    {
      "LicNumber": "CO000186000",
      "LegalName": "REPUBLIC PROPERTIES, INC.",
      "Address1": "4845 EAST INDIAN SCHOOL ROAD",
      "OriginalDate": "1/1/1966",
      "ExpireDate": "8/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 840-3626"
    },
    {
      "LicNumber": "CO000188000",
      "LegalName": "RIO VERDE DEVELOPMENT, INC.",
      "Address1": "13215 N Verde River Dr Unit 2",
      "OriginalDate": "6/15/1973",
      "ExpireDate": "9/30/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(480) 471-7247"
    },
    {
      "LicNumber": "CO000189000",
      "LegalName": "R.S.V.P. REALTY, INC.",
      "Address1": "1405 NORTH DOBSON ROAD, SUITE 14",
      "OriginalDate": "5/25/1973",
      "ExpireDate": "4/30/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(480) 838-3898"
    },
    {
      "LicNumber": "CO000190000",
      "LegalName": "ROBERT GORY REALTY, INC.",
      "Address1": "9035 RIVERSIDE DRIVE",
      "OriginalDate": "9/20/1974",
      "ExpireDate": "9/30/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(928) 667-3381"
    },
    {
      "LicNumber": "CO000191000",
      "LegalName": "ROOKER REALTY, INC.",
      "Address1": "4884 E BROADWAY",
      "OriginalDate": "12/23/1974",
      "ExpireDate": "12/31/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 881-4884"
    },
    {
      "LicNumber": "CO000192000",
      "LegalName": "ROY H. LONG REALTY COMPANY, INC.",
      "Address1": "900 E RIVER RD",
      "OriginalDate": "1/1/1960",
      "ExpireDate": "3/31/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 888-8844"
    },
    {
      "LicNumber": "CO000197000",
      "LegalName": "SCOTTSDALE REALTY, INC.",
      "Address1": "1825 N STAPLEY DR",
      "OriginalDate": "7/31/1975",
      "ExpireDate": "7/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 994-5700"
    },
    {
      "LicNumber": "CO000205000",
      "LegalName": "SIERRA VISTA REALTY, INC.",
      "Address1": "301 N GARDEN",
      "OriginalDate": "1/7/1969",
      "ExpireDate": "3/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 458-4388"
    },
    {
      "LicNumber": "CO000208000",
      "LegalName": "SOUTHWEST PROPERTIES, INC.",
      "Address1": "3850 E BASELINE RD STE 123",
      "OriginalDate": "7/1/1969",
      "ExpireDate": "7/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(480) 969-8000"
    },
    {
      "LicNumber": "CO000222000",
      "LegalName": "SWANGO REALTY & APPRAISAL SVC.INC.",
      "Address1": "2930 N. CALLE LADERA",
      "OriginalDate": "1/1/1960",
      "ExpireDate": "1/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 444-1457"
    },
    {
      "LicNumber": "CO000229000",
      "LegalName": "THE DUNBAR COMPANY LTD.",
      "Address1": "po box 1150",
      "OriginalDate": "6/6/1970",
      "ExpireDate": "4/30/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 264-7582"
    },
    {
      "LicNumber": "CO000231000",
      "LegalName": "THE JACOBSON COMPANIES, INC.",
      "Address1": "1334 S 5TH AVE",
      "OriginalDate": "3/31/1971",
      "ExpireDate": "11/30/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 782-1801"
    },
    {
      "LicNumber": "CO000239000",
      "LegalName": "TOM ADAM REALTY, INC.",
      "Address1": "P.O. Box 3195",
      "OriginalDate": "5/28/1974",
      "ExpireDate": "5/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "602-885-1053"
    },
    {
      "LicNumber": "CO000245000",
      "LegalName": "TUCSON REALTY AND TRUST CO.",
      "Address1": "333 N WILMOT #340",
      "OriginalDate": "1/1/1953",
      "ExpireDate": "7/31/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 577-7000"
    },
    {
      "LicNumber": "CO000256000",
      "LegalName": "FRANK W CORNELL CO.",
      "Address1": "6868 NORTH 7TH AVENUE, #205",
      "OriginalDate": "9/21/1976",
      "ExpireDate": "9/30/2023",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 277-0002"
    },
    {
      "LicNumber": "CO000268000",
      "LegalName": "ZELL COMMERCIAL REAL ESTATE SERVICES, INC.",
      "Address1": "5343 NORTH 16TH ST  SUITE 290",
      "OriginalDate": "2/1/1977",
      "ExpireDate": "2/28/2022",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(602) 248-0600"
    },
    {
      "LicNumber": "CO000297000",
      "LegalName": "GATEWAY WEST REALTY, INC.",
      "Address1": "PO BOX 35868",
      "OriginalDate": "8/23/1977",
      "ExpireDate": "12/31/2021",
      "LicStatus": "Active",
      "LicType": "Corporation",
      "LicCategory": "Real Estate",
      "Phone": "(520) 297-8331"
    },

    {
      "LicNumber": "LC535304000",
      "LegalName": "CEB GROUP, L.L.C.",
      "Address1": "4602 E. CALLE VENTURA",
      "OriginalDate": "8/8/2002",
      "ExpireDate": "8/31/2023",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(602) 952-8471"
    },
    {
      "LicNumber": "LC535582000",
      "LegalName": "JOHN BARNETT REALTY, LLC",
      "Address1": "7817 E. NORTHLAND DR",
      "OriginalDate": "7/31/2002",
      "ExpireDate": "12/31/2021",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(480) 515-1395"
    },
    {
      "LicNumber": "LC535913000",
      "LegalName": "DKS BROKERAGE LLC",
      "Address1": "13847 N. NORTHSIGHT #205",
      "OriginalDate": "9/5/2002",
      "ExpireDate": "5/31/2022",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(480) 778-1784"
    },
    {
      "LicNumber": "LC535995000",
      "LegalName": "ASHTON WOODS ARIZONA, LLC",
      "Address1": "8655 E. Via de Ventura",
      "OriginalDate": "8/23/2002",
      "ExpireDate": "8/31/2022",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(480) 515-9955"
    },
    {
      "LicNumber": "LC536015000",
      "LegalName": "MACERICH ARIZONA PARTNERS, L.L.C.",
      "Address1": "11411 NORTH TATUM BLVD",
      "OriginalDate": "9/11/2002",
      "ExpireDate": "3/31/2023",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(602) 953-6200"
    },
    {
      "LicNumber": "LC536030000",
      "LegalName": "SCHALLER REAL ESTATE, LLC",
      "Address1": "6244 E. Rose Circle Dr.",
      "OriginalDate": "9/10/2002",
      "ExpireDate": "9/30/2022",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(602) 469-4018"
    },
    {
      "LicNumber": "LC536467000",
      "LegalName": "STARDUST REAL ESTATE AND INVESTMENT LLC",
      "Address1": "17412 E CALIENTE DR",
      "OriginalDate": "9/27/2002",
      "ExpireDate": "9/30/2022",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(480) 837-5886"
    },
    {
      "LicNumber": "LC536852000",
      "LegalName": "BERTOLA & ASSOCIATES, L.L.C.",
      "Address1": "600 E Baseline Rd Suite B1",
      "OriginalDate": "10/15/2002",
      "ExpireDate": "2/28/2023",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(480) 755-1952"
    },
    {
      "LicNumber": "LC536856000",
      "LegalName": "REALPROS REAL ESTATE, LLC",
      "Address1": "5907 E PIMA",
      "OriginalDate": "10/16/2002",
      "ExpireDate": "3/31/2022",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "520-603-2022"
    },
    {
      "LicNumber": "LC536954002",
      "LegalName": "LS MARKETING & BROKERAGE, L.L.C.",
      "Address1": "7801 E SAN MIGUEL AVE",
      "OriginalDate": "6/8/2006",
      "ExpireDate": "1/31/2008",
      "LicStatus": "Inactive",
      "LicType": "Branch, Liability",
      "LicCategory": "Real Estate",
      "Phone": "(928) 367-3688"
    },
    {
      "LicNumber": "LC536971000",
      "LegalName": "HACIENDA PROPERTY MANAGEMENT, LLC",
      "Address1": "5153 E. 8th STREET",
      "OriginalDate": "10/22/2002",
      "ExpireDate": "10/31/2022",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(520) 275-0874"
    },
    {
      "LicNumber": "LC537000000",
      "LegalName": "CNN REALTY SERVICES, L.L.C",
      "Address1": "5900 N CAMINO PRECIADO",
      "OriginalDate": "10/22/2002",
      "ExpireDate": "5/31/2022",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(520) 615-9500"
    },
    {
      "LicNumber": "LC537126000",
      "LegalName": "FIRST CALL, REALTORS LLC",
      "Address1": "1236 N Ithica Street",
      "OriginalDate": "10/23/2002",
      "ExpireDate": "12/31/2022",
      "LicStatus": "Active",
      "LicType": "Limited Liability",
      "LicCategory": "Real Estate",
      "Phone": "(480) 635-0104"
    }
  ];

  let {
    topPinned,
    bottomPinned,
    colPinStart,
    colPinEnd,
    groupedHeader,

    rowDrag,
    rows,
    cols,
    order,
  } = {
    ...DEFAULT_CONFIG,
    ...config,
  };
  let sample = realEstateSample().slice(0, rows);
  let keys = Object.keys(sample[0]);
  rows = sample.length;

  cols = keys.length;

  
  const columns =   keys.map((key,rgCol)=>{
    let col= {
      name: key,
    prop: key,
    class:{[key]:true},
    className:{[key]:true},
    sortable: true,
    size: key === 'LegalName' ? 350 : 200,
    cellCompare:  naturalSort ,
    order:(rgCol===order)?'asc':undefined,
    rowDrag:(rgCol===rowDrag),
    cellProperties: ({prop, model, data, column}) => {
console.log({prop,model,data,column})
      return {  class:{[key]:true,[prop]:true}}
    }
  }
  if(['LegalName','Address1'].includes(key)) {
    col.style={
      'text-align':'left'
    }
  }
  return col
});
 
  const result = sample.map(row=>{
    row.LegalName=row.LegalName.toLowerCase()
    return row
  }); 
  
  
  console.log({ columns, result });
  // apply config
  const pinnedTopRows = topPinned.map(i => ({ ...result[i] }));
  // apply config
  const pinnedBottomRows = bottomPinned.map(i => ({ ...result[i] }));
  let headers = Object.keys(columns).map(k => columns[k]);


  return {
    rows: result,
    pinnedTopRows,
    pinnedBottomRows,
    headers,
  };
}

