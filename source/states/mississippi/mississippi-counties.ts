import { bb26Range } from 'bb26'

/** @ignore */
export interface County {
  county: string
  codes: string[]
}

/** @ignore */
const counties: County[] = [
  { county: 'Adams', codes: ['AD', 'AE'] },
  { county: 'Alcorn', codes: ['AL', 'AC'] },
  { county: 'Amite', codes: ['AM'] },
  { county: 'Attala', codes: ['AT', 'AA'] },
  { county: 'Benton', codes: ['BE'] },
  { county: 'Bolivar', codes: ['BR', 'BV', 'BL'] },
  { county: 'Calhoun', codes: ['CA', 'CN'] },
  { county: 'Carroll', codes: ['CR'] },
  { county: 'Chickasaw', codes: ['CH'] },
  { county: 'Choctaw', codes: ['CT'] },
  { county: 'Claiborne', codes: ['CB'] },
  { county: 'Clarke', codes: ['CK', 'CL'] },
  { county: 'Clay', codes: ['CY'] },
  { county: 'Coahoma', codes: ['CM'] },
  { county: 'Copiah', codes: ['CP', 'CQ'] },
  { county: 'Covington', codes: ['CV', 'CW'] },
  { county: 'DeSoto', codes: bb26Range('DA', 'EA') },
  { county: 'Forrest', codes: bb26Range('FR', 'FV') },
  { county: 'Franklin', codes: ['FN'] },
  { county: 'George', codes: ['GE', 'GF'] },
  { county: 'Grenada', codes: ['GN', 'GA'] },
  { county: 'Hancock', codes: bb26Range('KA', 'KE') },
  { county: 'Harrison', codes: bb26Range('HA', 'HL') },
  { county: 'Hinds', codes: bb26Range('HN', 'IA') },
  { county: 'Holmes', codes: ['HL'] },
  { county: 'Humphreys', codes: ['HM'] },
  { county: 'Issaquena', codes: ['IS'] },
  { county: 'Itawamba', codes: ['IT', 'IW'] },
  { county: 'Jackson', codes: bb26Range('JG', 'JN') },
  { county: 'Jasper', codes: ['JA', 'JB'] },
  { county: 'Jefferson', codes: ['JF'] },
  { county: 'Jefferson Davis', codes: ['JD'] },
  { county: 'Jones', codes: ['JN', 'JP', 'JQ', 'JR'] },
  { county: 'Kemper', codes: ['KM'] },
  { county: 'Lafayette', codes: bb26Range('LX', 'MA') },
  { county: 'Lamar', codes: bb26Range('LL', 'LO') },
  { county: 'Lauderdale', codes: bb26Range('LA', 'LE') },
  { county: 'Lawrence', codes: ['LW'] },
  { county: 'Leake', codes: ['LJ', 'LK'] },
  { county: 'Lee', codes: bb26Range('LE', 'LI') },
  { county: 'Leflore', codes: ['LR', 'LS'] },
  { county: 'Lincoln', codes: ['LI', 'LP', 'LQ'] },
  { county: 'Lowndes', codes: bb26Range('LT', 'LW') },
  { county: 'Madison', codes: bb26Range('MA', 'MG') },
  { county: 'Marion', codes: ['MN', 'MP'] },
  { county: 'Marshall', codes: bb26Range('MQ', 'MT') },
  { county: 'Monroe', codes: bb26Range('MJ', 'MM') },
  { county: 'Montgomery', codes: ['MT'] },
  { county: 'Neshoba', codes: ['NE', 'NF'] },
  { county: 'Newton', codes: ['NV', 'NW'] },
  { county: 'Noxubee', codes: ['NX'] },
  { county: 'Oktibbeha', codes: ['KT', 'KU'] },
  { county: 'Panola', codes: ['PA', 'PB', 'PC'] },
  { county: 'Pearl River', codes: bb26Range('PR', 'PV') },
  { county: 'Perry', codes: ['PE'] },
  { county: 'Pike', codes: bb26Range('PK', 'PN') },
  { county: 'Pontotoc', codes: ['PN', 'PP', 'PQ'] },
  { county: 'Prentiss', codes: ['PW', 'PX'] },
  { county: 'Rankin', codes: bb26Range('RA', 'SA') },
  { county: 'Scott', codes: ['SC', 'SD'] },
  { county: 'Sharkey', codes: ['SH'] },
  { county: 'Simpson', codes: ['SP', 'SR'] },
  { county: 'Smith', codes: ['SM', 'SN'] },
  { county: 'Stone', codes: ['ST', 'SU'] },
  { county: 'Sunflower', codes: ['SF', 'SG'] },
  { county: 'Tallahatchie', codes: ['TL'] },
  { county: 'Tate', codes: ['TA', 'TB'] },
  { county: 'Tippah', codes: ['TP', 'TQ'] },
  { county: 'Tishomingo', codes: ['TS', 'TT'] },
  { county: 'Tunica', codes: ['TN'] },
  { county: 'Union', codes: ['UN', 'UP'] },
  { county: 'Walthall', codes: ['WL', 'WM'] },
  { county: 'Warren', codes: bb26Range('WA', 'WE') },
  { county: 'Washington', codes: bb26Range('WS', 'WX') },
  { county: 'Wayne', codes: ['WY', 'WZ'] },
  { county: 'Webster', codes: ['WE'] },
  { county: 'Wilkinson', codes: ['WK'] },
  { county: 'Winston', codes: ['WN', 'WP'] },
  { county: 'Yalobusha', codes: ['YL'] },
  { county: 'Yazoo', codes: ['YZ', 'YA'] },
]

export default counties