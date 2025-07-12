const educationHistory = [
  { id: 1, period: '2009 - 2015', institution: 'SDN 1 Jebugan', major: 'Sekolah Dasar'},
  { id: 2, period: '2016 - 2017', institution: 'PPMI Assalam', major: 'Mts'},
  { id: 3, period: '2018 - 2021', institution: 'SMK Negeri 2 Klaten', major: 'Elektronika' },
  { id: 4, period: '2023 - Sekarang', institution: 'Universitas AMIKOM', major: 'S1 - Teknik Informatika' }
];

const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' }
];

const projects = [
  {
    title: 'Website CRUD',
    images: ['/image/CRUD1.png', '/image/CRUD2.png', '/image/CRUD3.png'],
    image: '/image/CRUD1.png',
    description: 'Web iseng CRUD barang dengan admin panel untuk mengelola data barang. dan user dapat melihat data barang yang tersedia lalu melakukan proses transaksi yang akan mengurangi stock barang.',
    tech: ['Vue.js', 'Express.js', 'javascript', 'Prisma'],
    link: 'https://github.com/siBregas/TokoBarang_vue_express',
    hasSlider: true
  },
  {
    title: 'project kelas online',
    image: 'https://via.placeholder.com/500x300?text=Proyek+2',
    description: 'web tembat belajar coding online',
    tech: ['Laravel', 'php'],
    link: 'https://github.com/KingEery/FP_PemrogWeb'
  }
];

module.exports = { educationHistory, skills, projects };