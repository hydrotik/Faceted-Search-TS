
module app {
  
  

  export class Model {

    private items:Array<Object> = new Array<Object>();


    public getItems(){
      return this.items;
    }
    
    constructor() {
      
      this.items = [
        {
          'firstname': 'Mary',
          'lastname': 'Smith',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/0',
          'description': 'Sed Ea Amet. Stet Voluptua. Nonumy Magna Takimata ',
          'category': 'Mouse',
          'language': ['Smalltalk', 'XSLT'],
          'continent': 'Africa'
        },
        {
          'firstname': 'Patricia',
          'lastname': 'Johnson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/1',
          'description': 'Ut Takimata Sit Aliquyam Labore Aliquyam Sit Sit Lorem Amet. Ipsum Rebum. ',
          'category': 'Lion',
          'language': ['Lisp'],
          'continent': 'North America'
        },
        {
          'firstname': 'Linda',
          'lastname': 'Williams',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Monkey/2',
          'description': 'Ut Ut Amet, Voluptua. Diam Sed Sanctus Ipsum Stet Sit Erat, Nonumy ',
          'category': 'Monkey',
          'language': ['Erlang', 'Lisp'],
          'continent': 'South America'
        },
        {
          'firstname': 'Barbara',
          'lastname': 'Brown',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/3',
          'description': 'Lorem Sanctus Diam Invidunt Dolore Sanctus Ipsum ',
          'category': 'Fish',
          'language': 'Smalltalk',
          'continent': 'Africa'
        },
        {
          'firstname': 'Elizabeth',
          'lastname': 'Jones',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/4',
          'description': 'Nonumy Et Gubergren, Tempor Sea Dolores Kasd Eirmod Takimata Dolores ',
          'category': 'Bird',
          'language': 'TeX',
          'continent': 'Europe'
        },
        {
          'firstname': 'Jennifer',
          'lastname': 'Miller',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/5',
          'description': 'Consetetur Elitr, Takimata Kasd Erat, Eirmod ',
          'category': 'Dog',
          'language': 'Basic',
          'continent': 'Europe'
        },
        {
          'firstname': 'Maria',
          'lastname': 'Davis',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/6',
          'description': 'Tempor Lorem Rebum. Dolor Kasd Ipsum Elitr, Lorem Diam Sed ',
          'category': 'Lion',
          'language': 'Assembly',
          'continent': 'Antarctica'
        },
        {
          'firstname': 'Susan',
          'lastname': 'Garcia',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/7',
          'description': 'Rebum. Diam Rebum. Sea Sadipscing Ut Et Et Nonumy Ipsum Amet. Amet. Sed Labore ',
          'category': 'Horse',
          'language': 'JavaScript',
          'continent': 'Australia'
        },
        {
          'firstname': 'Margaret',
          'lastname': 'Rodriguez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/8',
          'description': 'No Ut Duo Dolores Ipsum Lorem Duo Sanctus Ipsum At Erat, ',
          'category': 'Mouse',
          'language': 'TeX',
          'continent': 'Africa'
        },
        {
          'firstname': 'Dorothy',
          'lastname': 'Wilson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/9',
          'description': 'Diam Dolores Dolores Magna Elitr, ',
          'category': 'Bird',
          'language': 'Fortran',
          'continent': 'Asia'
        },
        {
          'firstname': 'Lisa',
          'lastname': 'Martinez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/10',
          'description': 'Amet, Aliquyam No Labore Ea Sanctus Sit Amet, Ipsum Est Erat, ',
          'category': 'Bird',
          'language': 'XSLT',
          'continent': 'Antarctica'
        },
        {
          'firstname': 'Nancy',
          'lastname': 'Anderson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/11',
          'description': 'Vero Ea Justo Sea Dolores Invidunt Diam Amet, Justo Est Clita Ea ',
          'category': 'Bird',
          'language': 'Erlang',
          'continent': 'Africa'
        },
        {
          'firstname': 'Karen',
          'lastname': 'Taylor',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Monkey/12',
          'description': 'Sed Rebum. Ea Et Kasd Accusam ',
          'category': 'Monkey',
          'language': 'C++',
          'continent': 'Antarctica'
        },
        {
          'firstname': 'Betty',
          'lastname': 'Thomas',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/13',
          'description': 'Clita Eirmod Magna Lorem Rebum. Sed Dolores Diam Consetetur Vero Elitr, ',
          'category': 'Horse',
          'language': 'Ruby',
          'continent': 'Asia'
        },
        {
          'firstname': 'Helen',
          'lastname': 'Hernandez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Whale/14',
          'description': 'Diam Accusam Ipsum Kasd Rebum. Invidunt ',
          'category': 'Whale',
          'language': 'XSLT',
          'continent': 'North America'
        },
        {
          'firstname': 'Sandra',
          'lastname': 'Moore',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/15',
          'description': 'Sed Est Sea Et Dolores Sea Dolores ',
          'category': 'Horse',
          'continent': 'South America'
        },
        {
          'firstname': 'Donna',
          'lastname': 'Martin',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/16',
          'description': 'Dolor Rebum. Lorem Takimata Dolore ',
          'category': 'Cat',
          'language': 'Delphi',
          'continent': 'Antarctica'
        },
        {
          'firstname': 'Carol',
          'lastname': 'Jackson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/17',
          'description': 'Labore Eos Gubergren, Dolores Sit Lorem Sit ',
          'category': 'Cat',
          'language': 'Smalltalk',
          'continent': 'South America'
        },
        {
          'firstname': 'Ruth',
          'lastname': 'Thompson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/18',
          'description': 'Takimata At Consetetur Sadipscing Accusam ',
          'category': 'Cat',
          'language': 'Erlang',
          'continent': 'Europe'
        },
        {
          'firstname': 'Sharon',
          'lastname': 'White',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/19',
          'description': 'Duo Sit Est Et Diam Invidunt Et Sit Nonumy ',
          'category': 'Dog',
          'language': 'XSLT',
          'continent': 'Africa'
        },
        {
          'firstname': 'Michelle',
          'lastname': 'Lopez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/20',
          'description': 'Sed Invidunt Aliquyam Et Kasd Erat, Amet. Vero Aliquyam ',
          'category': 'Horse',
          'language': 'Delphi',
          'continent': 'Europe'
        },
        {
          'firstname': 'Laura',
          'lastname': 'Lee',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/21',
          'description': 'Elitr, Labore Diam Sit Sadipscing Consetetur Ut Justo Diam Tempor Accusam Stet Sed ',
          'category': 'Cat',
          'language': 'Go',
          'continent': 'Australia'
        },
        {
          'firstname': 'Sarah',
          'lastname': 'Gonzalez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/22',
          'description': 'At Voluptua. Ipsum Consetetur Stet Dolor Sanctus Sit ',
          'category': 'Cat',
          'language': 'TeX',
          'continent': 'Africa'
        },
        {
          'firstname': 'Kimberly',
          'lastname': 'Harris',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Monkey/23',
          'description': 'Diam Et Accusam Elitr, Diam Erat, Gubergren, Sit Sea ',
          'category': 'Monkey',
          'language': 'Perl',
          'continent': 'Europe'
        },
        {
          'firstname': 'Deborah',
          'lastname': 'Clark',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/24',
          'description': 'Ipsum Duo Rebum. Labore Et Amet, Sit No Lorem No Duo Aliquyam ',
          'category': 'Dog',
          'language': 'C++',
          'continent': 'Europe'
        },
        {
          'firstname': 'Jessica',
          'lastname': 'Lewis',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Whale/25',
          'description': 'Et Sadipscing Kasd Et Ipsum Sit Sed Diam Eirmod Sanctus ',
          'category': 'Whale',
          'language': 'Lisp',
          'continent': 'Australia'
        },
        {
          'firstname': 'Shirley',
          'lastname': 'Robinson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Whale/26',
          'description': 'Sit Vero Sanctus Tempor No ',
          'category': 'Whale',
          'language': 'JavaScript',
          'continent': 'Asia'
        },
        {
          'firstname': 'Cynthia',
          'lastname': 'Walker',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/27',
          'description': 'Diam Clita Et Clita Labore Takimata Clita Est Amet, Ea ',
          'category': 'Fish',
          'language': 'Smalltalk',
          'continent': 'Australia'
        },
        {
          'firstname': 'Angela',
          'lastname': 'Perez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/28',
          'description': 'No Amet. Diam Et Lorem Aliquyam Amet, Vero Amet. Labore Rebum. Erat, Duo ',
          'category': 'Horse',
          'language': 'Ruby',
          'continent': 'Europe'
        },
        {
          'firstname': 'Melissa',
          'lastname': 'Hall',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/29',
          'description': 'Et Sit Rebum. Sed Justo No ',
          'category': 'Fish',
          'language': 'Perl',
          'continent': 'Asia'
        },
        {
          'firstname': 'Brenda',
          'lastname': 'Young',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/30',
          'description': 'Magna Elitr, Diam Ipsum Voluptua. Amet. Ut Et Magna Gubergren, Diam No At ',
          'category': 'Fish',
          'language': 'C++',
          'continent': 'South America'
        },
        {
          'firstname': 'Amy',
          'lastname': 'Allen',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/31',
          'description': 'Diam Kasd Labore Ipsum Rebum. Dolore Takimata Duo Elitr, Rebum. ',
          'category': 'Fish',
          'language': 'Modula-3',
          'continent': 'Europe'
        },
        {
          'firstname': 'Anna',
          'lastname': 'Sanchez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/32',
          'description': 'Sit No Et Invidunt Ut Sit ',
          'category': 'Bird',
          'language': 'Ruby',
          'continent': 'South America'
        },
        {
          'firstname': 'Rebecca',
          'lastname': 'Wright',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/33',
          'description': 'Tempor At Sit Dolore Aliquyam ',
          'category': 'Cat',
          'language': 'C++',
          'continent': 'Europe'
        },
        {
          'firstname': 'Virginia',
          'lastname': 'King',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/34',
          'description': 'Dolores Diam Labore Diam Eos Diam Ut Justo Voluptua. Duo Sed Kasd ',
          'category': 'Dog',
          'language': 'Smalltalk',
          'continent': 'Antarctica'
        },
        {
          'firstname': 'Kathleen',
          'lastname': 'Scott',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/35',
          'description': 'Dolor Sea Gubergren, Kasd Amet, ',
          'category': 'Fish',
          'language': 'Perl',
          'continent': 'Asia'
        },
        {
          'firstname': 'Pamela',
          'lastname': 'Green',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/36',
          'description': 'Accusam Lorem Elitr, Nonumy Eirmod ',
          'category': 'Cat',
          'language': 'Ruby',
          'continent': 'Europe'
        },
        {
          'firstname': 'Martha',
          'lastname': 'Baker',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/37',
          'description': 'Rebum. Takimata Et Eos Erat, Sed Nonumy Elitr, No Sed Est Ea ',
          'category': 'Dog',
          'language': 'C++',
          'continent': 'North America'
        },
        {
          'firstname': 'Debra',
          'lastname': 'Adams',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/38',
          'description': 'Tempor Sea Lorem Consetetur Eos Sea Dolor Invidunt ',
          'category': 'Cat',
          'language': 'Go',
          'continent': 'Asia'
        },
        {
          'firstname': 'Amanda',
          'lastname': 'Nelson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/39',
          'description': 'Vero Et Amet. Kasd Consetetur At Et Elitr, Ea At Ipsum Consetetur Ipsum ',
          'category': 'Dog',
          'language': 'Perl',
          'continent': 'Australia'
        },
        {
          'firstname': 'Stephanie',
          'lastname': 'Hill',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/40',
          'description': 'Diam Et Ipsum Dolor Tempor Sit Consetetur Accusam Accusam Diam ',
          'category': 'Dog',
          'language': 'Lisp',
          'continent': 'Australia'
        },
        {
          'firstname': 'Carolyn',
          'lastname': 'Ramirez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/41',
          'description': 'Erat, Takimata Clita Sed Voluptua. Rebum. Ea Sanctus Aliquyam Vero Diam ',
          'category': 'Mouse',
          'language': 'Smalltalk',
          'continent': 'Africa'
        },
        {
          'firstname': 'Christine',
          'lastname': 'Campbell',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/42',
          'description': 'Eirmod Lorem Ea Sed Et Nonumy Vero Elitr, Dolores No Labore ',
          'category': 'Mouse',
          'language': 'Haskell',
          'continent': 'North America'
        },
        {
          'firstname': 'Marie',
          'lastname': 'Mitchell',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Whale/43',
          'description': 'Est Elitr, Ipsum Diam Eirmod Diam Clita ',
          'category': 'Whale',
          'language': 'Haskell',
          'continent': 'Australia'
        },
        {
          'firstname': 'Janet',
          'lastname': 'Roberts',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/44',
          'description': 'Labore Ut Sed Et Et Aliquyam Amet, Stet ',
          'category': 'Horse',
          'language': 'Perl',
          'continent': 'Antarctica'
        },
        {
          'firstname': 'Catherine',
          'lastname': 'Carter',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/45',
          'description': 'Eos Lorem No Sea At Lorem Ea Sea ',
          'category': 'Cat',
          'language': 'C++',
          'continent': 'North America'
        },
        {
          'firstname': 'Frances',
          'lastname': 'Phillips',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/46',
          'description': 'Sanctus Diam Ipsum Diam Sed Amet. Ea Eos Sadipscing ',
          'category': 'Horse',
          'language': 'Basic',
          'continent': 'Antarctica'
        },
        {
          'firstname': 'Ann',
          'lastname': 'Evans',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/47',
          'description': 'Accusam Dolor Sit Kasd Rebum. Sit Ipsum Elitr, Lorem Dolores Diam No ',
          'category': 'Mouse',
          'language': 'Perl',
          'continent': 'Antarctica'
        },
        {
          'firstname': 'Joyce',
          'lastname': 'Turner',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/48',
          'description': 'Eirmod Ipsum Invidunt Nonumy Clita Sed Magna Sed Lorem Dolor Ut Magna ',
          'category': 'Horse',
          'language': 'Fortran',
          'continent': 'North America'
        },
        {
          'firstname': 'Diane',
          'lastname': 'Torres',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/49',
          'description': 'Et Eos Gubergren, Magna Et Accusam ',
          'category': 'Lion',
          'language': 'Perl',
          'continent': 'Asia'
        },
        {
          'firstname': 'Alice',
          'lastname': 'Parker',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Monkey/50',
          'description': 'Labore Gubergren, Rebum. Invidunt Duo No Accusam Amet, Gubergren, Et Voluptua. At ',
          'category': 'Monkey',
          'language': 'Lisp',
          'continent': 'North America'
        },
        {
          'firstname': 'Julie',
          'lastname': 'Collins',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/51',
          'description': 'Magna Ut Takimata Takimata Labore Dolor Dolor Justo Dolor Et Aliquyam Consetetur Vero ',
          'category': 'Horse',
          'language': 'Fortran',
          'continent': 'Europe'
        },
        {
          'firstname': 'Heather',
          'lastname': 'Edwards',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/52',
          'description': 'Takimata Amet, Sed Dolor Ut Tempor Amet, Stet Accusam Ea ',
          'category': 'Mouse',
          'language': 'XSLT',
          'continent': 'Africa'
        },
        {
          'firstname': 'Teresa',
          'lastname': 'Stewart',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/53',
          'description': 'Stet Eirmod Justo Amet, Amet. Voluptua. Tempor Elitr, Labore ',
          'category': 'Dog',
          'language': 'Lisp',
          'continent': 'Asia'
        },
        {
          'firstname': 'Doris',
          'lastname': 'Flores',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/54',
          'description': 'Aliquyam Et Gubergren, Est Eos Accusam Est Stet Consetetur Aliquyam Aliquyam Ea Voluptua. ',
          'category': 'Dog',
          'language': 'Erlang',
          'continent': 'North America'
        },
        {
          'firstname': 'Gloria',
          'lastname': 'Morris',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Whale/55',
          'description': 'Dolor At Eirmod Magna Sadipscing Clita Sit Voluptua. ',
          'category': 'Whale',
          'language': 'Haskell',
          'continent': 'North America'
        },
        {
          'firstname': 'Evelyn',
          'lastname': 'Nguyen',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/56',
          'description': 'Sit Lorem Kasd No At Tempor Justo ',
          'category': 'Mouse',
          'language': 'TeX',
          'continent': 'Africa'
        },
        {
          'firstname': 'Jean',
          'lastname': 'Murphy',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/57',
          'description': 'Lorem Rebum. Dolor Est Et Diam Ea Sadipscing Rebum. ',
          'category': 'Bird',
          'language': 'TeX',
          'continent': 'Asia'
        },
        {
          'firstname': 'Cheryl',
          'lastname': 'Rivera',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Whale/58',
          'description': 'Eirmod Ipsum Takimata Amet. Tempor Est ',
          'category': 'Whale',
          'language': 'Go',
          'continent': 'Asia'
        },
        {
          'firstname': 'Mildred',
          'lastname': 'Cook',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/59',
          'description': 'Magna Ut Aliquyam Kasd No Aliquyam Accusam Labore ',
          'category': 'Lion',
          'language': 'Ruby',
          'continent': 'Europe'
        },
        {
          'firstname': 'Katherine',
          'lastname': 'Rogers',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/60',
          'description': 'Aliquyam Invidunt Diam Stet Sea Et Sit At Tempor Ipsum Kasd Est Ipsum Ipsum ',
          'category': 'Bird',
          'language': 'Go',
          'continent': 'Europe'
        },
        {
          'firstname': 'Joan',
          'lastname': 'Morgan',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/61',
          'description': 'Aliquyam Vero Aliquyam Kasd Magna Eos Sit Magna Eos Nonumy Voluptua. Eirmod ',
          'category': 'Horse',
          'language': 'TeX',
          'continent': 'North America'
        },
        {
          'firstname': 'Ashley',
          'lastname': 'Peterson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/62',
          'description': 'Dolor Amet, Aliquyam Tempor Tempor Consetetur Labore Erat, Et Magna Sed Et Stet Gubergren, ',
          'category': 'Mouse',
          'language': 'Go',
          'continent': 'Australia'
        },
        {
          'firstname': 'Judith',
          'lastname': 'Cooper',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/63',
          'description': 'Clita Duo Eirmod Magna Eirmod Dolore Et Voluptua. Dolor Gubergren, ',
          'category': 'Dog',
          'language': 'C++',
          'continent': 'Australia'
        },
        {
          'firstname': 'Rose',
          'lastname': 'Reed',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/64',
          'description': 'Et Duo Sit Erat, Lorem Amet, Sit Sanctus Stet ',
          'category': 'Bird',
          'language': 'Assembly',
          'continent': 'Europe'
        },
        {
          'firstname': 'Janice',
          'lastname': 'Bailey',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Monkey/65',
          'description': 'Sed Ipsum Duo Stet At Eirmod Et Et Consetetur Aliquyam ',
          'category': 'Monkey',
          'language': 'Assembly',
          'continent': 'Asia'
        },
        {
          'firstname': 'Kelly',
          'lastname': 'Bell',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/66',
          'description': 'Vero Sed Consetetur Amet, Sadipscing Kasd Et Sed Et Dolor ',
          'category': 'Cat',
          'language': 'Lisp',
          'continent': 'Africa'
        },
        {
          'firstname': 'Nicole',
          'lastname': 'Gomez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/67',
          'description': 'Justo Ipsum Ea Amet. Dolor Aliquyam Accusam Sed Diam Et Sea Eirmod Lorem Invidunt ',
          'category': 'Fish',
          'language': 'Delphi',
          'continent': 'South America'
        },
        {
          'firstname': 'Judy',
          'lastname': 'Kelly',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/68',
          'description': 'Eirmod Lorem Magna Amet, Sea Ea Vero Sea Eirmod Diam Stet Justo Nonumy ',
          'category': 'Bird',
          'language': 'TeX',
          'continent': 'Africa'
        },
        {
          'firstname': 'Christina',
          'lastname': 'Howard',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/69',
          'description': 'Ipsum Ipsum Kasd Tempor Et Magna Dolore Et ',
          'category': 'Bird',
          'language': 'Fortran',
          'continent': 'Asia'
        },
        {
          'firstname': 'Kathy',
          'lastname': 'Ward',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/70',
          'description': 'Consetetur Amet. Gubergren, Rebum. Ipsum Elitr, Sed Accusam Dolores Stet Vero Rebum. Rebum. ',
          'category': 'Lion',
          'language': 'Erlang',
          'continent': 'Antarctica'
        },
        {
          'firstname': 'Theresa',
          'lastname': 'Cox',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/71',
          'description': 'Ea Amet. At Erat, Ipsum Et Lorem Amet, Sed Et Sanctus Sit Clita ',
          'category': 'Bird',
          'language': 'TeX',
          'continent': 'Europe'
        },
        {
          'firstname': 'Beverly',
          'lastname': 'Diaz',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/72',
          'description': 'Kasd Diam Lorem Lorem Sit Dolore No ',
          'category': 'Lion',
          'language': 'Haskell',
          'continent': 'Australia'
        },
        {
          'firstname': 'Denise',
          'lastname': 'Richardson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/73',
          'description': 'At Eirmod Rebum. Sed Dolor Gubergren, Sadipscing Dolore Est Sanctus Sed No Eirmod Erat, ',
          'category': 'Fish',
          'language': 'Delphi',
          'continent': 'Africa'
        },
        {
          'firstname': 'Tammy',
          'lastname': 'Wood',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/74',
          'description': 'Gubergren, Dolor Ipsum Est Diam Accusam Ipsum Et ',
          'category': 'Fish',
          'language': 'JavaScript',
          'continent': 'South America'
        },
        {
          'firstname': 'Irene',
          'lastname': 'Watson',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/75',
          'description': 'Et Et Invidunt Justo Vero Ut Gubergren, Dolore ',
          'category': 'Mouse',
          'language': 'Haskell',
          'continent': 'Asia'
        },
        {
          'firstname': 'Jane',
          'lastname': 'Brooks',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/76',
          'description': 'Dolor Rebum. Sit Magna Duo Dolore Lorem Ipsum Aliquyam Aliquyam ',
          'category': 'Fish',
          'language': 'XSLT',
          'continent': 'Europe'
        },
        {
          'firstname': 'Lori',
          'lastname': 'Bennett',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/77',
          'description': 'Amet. Ipsum Erat, Amet. Est Et ',
          'category': 'Bird',
          'language': 'Erlang',
          'continent': 'South America'
        },
        {
          'firstname': 'Rachel',
          'lastname': 'Gray',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/78',
          'description': 'At Stet Sit Eirmod Duo Vero Magna Et Diam Amet. ',
          'category': 'Dog',
          'language': 'Smalltalk',
          'continent': 'Asia'
        },
        {
          'firstname': 'Marilyn',
          'lastname': 'James',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Fish/79',
          'description': 'Sit Accusam Lorem Sed Consetetur Sea Sed Sanctus Sed ',
          'category': 'Fish',
          'language': 'XSLT',
          'continent': 'Australia'
        },
        {
          'firstname': 'Andrea',
          'lastname': 'Reyes',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/80',
          'description': 'Clita Amet. Accusam Sed Diam Amet, ',
          'category': 'Cat',
          'language': 'Assembly',
          'continent': 'North America'
        },
        {
          'firstname': 'Kathryn',
          'lastname': 'Cruz',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/81',
          'description': 'Tempor Stet Diam Rebum. Dolor Takimata Sed Stet Magna Stet ',
          'category': 'Cat',
          'language': 'Basic',
          'continent': 'Europe'
        },
        {
          'firstname': 'Louise',
          'lastname': 'Hughes',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/82',
          'description': 'Magna Vero At Eirmod Dolore Dolor Labore No Labore Rebum. Labore Tempor Labore ',
          'category': 'Bird',
          'language': 'Modula-3',
          'continent': 'South America'
        },
        {
          'firstname': 'Sara',
          'lastname': 'Price',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/83',
          'description': 'Lorem Nonumy Duo Sit Dolor Nonumy Invidunt Diam Ipsum Elitr, Sed Rebum. Vero At ',
          'category': 'Lion',
          'language': 'Erlang',
          'continent': 'Asia'
        },
        {
          'firstname': 'Anne',
          'lastname': 'Myers',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Monkey/84',
          'description': 'Sit Erat, At Vero Sanctus Erat, Dolor ',
          'category': 'Monkey',
          'language': 'XSLT',
          'continent': 'Asia'
        },
        {
          'firstname': 'Jacqueline',
          'lastname': 'Long',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/85',
          'description': 'Sit Diam Eos Duo Sea Eirmod Justo Stet Vero Dolor ',
          'category': 'Dog',
          'language': 'Modula-3',
          'continent': 'South America'
        },
        {
          'firstname': 'Wanda',
          'lastname': 'Foster',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Monkey/86',
          'description': 'Dolor Sanctus Accusam Elitr, Invidunt No Amet, Vero Ea Elitr, Justo ',
          'category': 'Monkey',
          'language': 'JavaScript',
          'continent': 'North America'
        },
        {
          'firstname': 'Bonnie',
          'lastname': 'Sanders',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/87',
          'description': 'Takimata Consetetur Dolor Amet, Clita ',
          'category': 'Bird',
          'language': 'Smalltalk',
          'continent': 'Australia'
        },
        {
          'firstname': 'Julia',
          'lastname': 'Ross',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/88',
          'description': 'Lorem Gubergren, Labore Eirmod Tempor Tempor ',
          'category': 'Horse',
          'language': 'Assembly',
          'continent': 'Europe'
        },
        {
          'firstname': 'Ruby',
          'lastname': 'Morales',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/89',
          'description': 'Sit Sit Diam Labore Lorem Diam No Kasd Diam ',
          'category': 'Horse',
          'language': 'JavaScript',
          'continent': 'Asia'
        },
        {
          'firstname': 'Lois',
          'lastname': 'Powell',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/90',
          'description': 'Ea Elitr, No Erat, Diam Et Ipsum Elitr, Diam Clita Tempor Stet Erat, ',
          'category': 'Lion',
          'language': 'XSLT',
          'continent': 'South America'
        },
        {
          'firstname': 'Tina',
          'lastname': 'Sullivan',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Dog/91',
          'description': 'Lorem Sit Ipsum Et Kasd Et Dolores Diam Dolor Sanctus Sadipscing Dolor Sed Diam ',
          'category': 'Dog',
          'language': 'TeX',
          'continent': 'Asia'
        },
        {
          'firstname': 'Phyllis',
          'lastname': 'Russell',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/92',
          'description': 'Amet. Diam Dolore Sit Elitr, Lorem Sit Sit Nonumy ',
          'category': 'Lion',
          'language': 'Fortran',
          'continent': 'Africa'
        },
        {
          'firstname': 'Norma',
          'lastname': 'Ortiz',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Mouse/93',
          'description': 'Rebum. Sadipscing Ea Lorem Sadipscing Ea Elitr, Erat, Vero ',
          'category': 'Mouse',
          'language': 'Perl',
          'continent': 'South America'
        },
        {
          'firstname': 'Paula',
          'lastname': 'Jenkins',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Cat/94',
          'description': 'Sit Sit At Sit Accusam Est ',
          'category': 'Cat',
          'language': 'Haskell',
          'continent': 'Asia'
        },
        {
          'firstname': 'Diana',
          'lastname': 'Gutierrez',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/95',
          'description': 'Amet. Justo No Et Dolor Et Erat, Voluptua. Amet, Ipsum Est ',
          'category': 'Horse',
          'language': 'Erlang',
          'continent': 'Europe'
        },
        {
          'firstname': 'Annie',
          'lastname': 'Perry',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Bird/96',
          'description': 'Et Sanctus Justo Sadipscing Sed Et No Duo ',
          'category': 'Bird',
          'language': 'Erlang',
          'continent': 'Asia'
        },
        {
          'firstname': 'Lillian',
          'lastname': 'Butler',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Monkey/97',
          'description': 'At Dolore No Justo Labore Gubergren, Voluptua. Et No Sit Lorem Labore Tempor Aliquyam ',
          'category': 'Monkey',
          'language': 'Basic',
          'continent': 'Africa'
        },
        {
          'firstname': 'Emily',
          'lastname': 'Barnes',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Horse/98',
          'description': 'Kasd Et Amet. Ipsum Takimata Amet. Diam Sanctus Gubergren, Consetetur Rebum. Sea Amet, ',
          'category': 'Horse',
          'language': 'Smalltalk',
          'continent': 'Europe'
        },
        {
          'firstname': 'Robin',
          'lastname': 'Fisher',
          'imageURL': 'http://flickholdr.iwerk.org/150/100/Lion/99',
          'description': 'Et Eos Nonumy Ut Invidunt Sed Diam Consetetur Stet At Labore Lorem ',
          'category': 'Lion',
          'language': 'Ruby',
          'continent': 'North America'
        }
      ];


    }
  }
}
