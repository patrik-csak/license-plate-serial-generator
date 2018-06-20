import Bb26 from '../../modules/bb26'

interface County {
    county: string
    codes: string[]
}

const counties: County[] = [
    {county: 'Adams', codes: ['ad', 'ae']},
    {county: 'Alcorn', codes: ['al', 'ac']},
    {county: 'Amite', codes: ['am']},
    {county: 'Attala', codes: ['at', 'aa']},
    {county: 'Benton', codes: ['be']},
    {county: 'Bolivar', codes: ['br', 'bv', 'bl']},
    {county: 'Calhoun', codes: ['ca', 'cn']},
    {county: 'Carroll', codes: ['cr']},
    {county: 'Chickasaw', codes: ['ch']},
    {county: 'Choctaw', codes: ['ct']},
    {county: 'Claiborne', codes: ['cb']},
    {county: 'Clarke', codes: ['ck', 'cl']},
    {county: 'Clay', codes: ['cy']},
    {county: 'Coahoma', codes: ['cm']},
    {county: 'Copiah', codes: ['cp', 'cq']},
    {county: 'Covington', codes: ['cv', 'cw']},
    {county: 'DeSoto', codes: Bb26.range('da', 'ea')},
    {county: 'Forrest', codes: Bb26.range('fr', 'fv')},
    {county: 'Franklin', codes: ['fn']},
    {county: 'George', codes: ['ge', 'gf']},
    {county: 'Grenada', codes: ['gn', 'ga']},
    {county: 'Hancock', codes: Bb26.range('ka', 'ke')},
    {county: 'Harrison', codes: Bb26.range('ha', 'hl')},
    {
        county: 'Hinds',
        codes: Bb26.range('hn', 'hx').concat(Bb26.range('hx', 'ia'))
    },
    {county: 'Holmes', codes: ['hl']},
    {county: 'Humphreys', codes: ['hm']},
    {county: 'Issaquena', codes: ['is']},
    {county: 'Itawamba', codes: ['it', 'iw']},
    {county: 'Jackson', codes: Bb26.range('jg', 'jn')},
    {county: 'Jasper', codes: ['ja', 'jb']},
    {county: 'Jefferson', codes: ['jf']},
    {county: 'Jefferson Davis', codes: ['jd']},
    {county: 'Jones', codes: ['jn'].concat(Bb26.range('jp', 'js'))},
    {county: 'Kemper', codes: ['km']},
    {county: 'Lafayette', codes: Bb26.range('lx', 'ma')},
    {county: 'Lamar', codes: Bb26.range('ll', 'lo')},
    {county: 'Lauderdale', codes: Bb26.range('la', 'le')},
    {county: 'Lawrence', codes: ['lw']},
    {county: 'Leake', codes: ['lj', 'lk']},
    {county: 'Lee', codes: Bb26.range('le', 'li')},
    {county: 'Leflore', codes: ['lr', 'ls']},
    {county: 'Lincoln', codes: ['li', 'lp', 'lq']},
    {county: 'Lowndes', codes: Bb26.range('lt', 'lw')},
    {county: 'Madison', codes: Bb26.range('ma', 'mg')},
    {county: 'Marion', codes: ['mn', 'mp']},
    {county: 'Marshall', codes: Bb26.range('mq', 'mt')},
    {county: 'Monroe', codes: Bb26.range('mj', 'mm')},
    {county: 'Montgomery', codes: ['mt']},
    {county: 'Neshoba', codes: ['ne', 'nf']},
    {county: 'Newton', codes: ['nv', 'nw']},
    {county: 'Noxubee', codes: ['nx']},
    {county: 'Oktibbeha', codes: ['kt', 'ku']},
    {county: 'Panola', codes: ['pa', 'pb', 'pc']},
    {county: 'Pearl River', codes: Bb26.range('pr', 'pv')},
    {county: 'Perry', codes: ['pe']},
    {county: 'Pike', codes: Bb26.range('pk', 'pn')},
    {county: 'Pontotoc', codes: ['pn', 'pp', 'pq']},
    {county: 'Prentiss', codes: ['pw', 'px']},
    {county: 'Rankin', codes: Bb26.range('ra', 'sa')},
    {county: 'Scott', codes: ['sc', 'sd']},
    {county: 'Sharkey', codes: ['sh']},
    {county: 'Simpson', codes: ['sp', 'sr']},
    {county: 'Smith', codes: ['sm', 'sn']},
    {county: 'Stone', codes: ['st', 'su']},
    {county: 'Sunflower', codes: ['sf', 'sg']},
    {county: 'Tallahatchie', codes: ['tl']},
    {county: 'Tate', codes: ['ta', 'tb']},
    {county: 'Tippah', codes: ['tp', 'tq']},
    {county: 'Tishomingo', codes: ['ts', 'tt']},
    {county: 'Tunica', codes: ['tn']},
    {county: 'Union', codes: ['un', 'up']},
    {county: 'Walthall', codes: ['wl', 'wm']},
    {county: 'Warren', codes: Bb26.range('wa', 'we')},
    {county: 'Washington', codes: Bb26.range('ws', 'wx')},
    {county: 'Wayne', codes: ['wy', 'wz']},
    {county: 'Webster', codes: ['we']},
    {county: 'Wilkinson', codes: ['wk']},
    {county: 'Winston', codes: ['wn', 'wp']},
    {county: 'Yalobusha', codes: ['yl']},
    {county: 'Yazoo', codes: ['yz', 'ya']},
]

export default counties
