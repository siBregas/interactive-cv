-- Database schema for Interactive CV
-- Execute this in your Neon database console

-- Create Education table
CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    period VARCHAR(50) NOT NULL,
    institution VARCHAR(200) NOT NULL,
    major VARCHAR(100)
);

-- Create Skills table
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    level VARCHAR(50) NOT NULL
);

-- Create Projects table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    image VARCHAR(500),
    images TEXT[], -- Array of image URLs
    tech TEXT[], -- Array of technologies
    link VARCHAR(500),
    has_slider BOOLEAN DEFAULT FALSE
);

-- Insert sample data
INSERT INTO education (period, institution, major) VALUES
('2009 - 2015', 'SDN 1 Jebugan', 'Sekolah Dasar'),
('2016 - 2017', 'PPMI Assalam', 'Mts'),
('2018 - 2021', 'SMK Negeri 2 Klaten', 'Elektronika'),
('2023 - Sekarang', 'Universitas AMIKOM', 'S1 - Teknik Informatika');

INSERT INTO skills (name, level) VALUES
('Vue.js', 'Mahir'),
('JavaScript', 'Mahir'),
('Tailwind CSS', 'Mahir'),
('Node.js', 'Menengah'),
('Express.js', 'Menengah'),
('PostgreSQL', 'Menengah'),
('Git & GitHub', 'Mahir'),
('HTML5 & CSS3', 'Mahir');

INSERT INTO projects (title, description, image, images, tech, link, has_slider) VALUES
('Website CRUD', 
 'Web iseng CRUD barang dengan admin panel untuk mengelola data barang. dan user dapat melihat data barang yang tersedia lalu melakukan proses transaksi yang akan mengurangi stock barang.',
 '/image/CRUD1.png',
 ARRAY['/image/CRUD1.png', '/image/CRUD2.png', '/image/CRUD3.png'],
 ARRAY['Vue.js', 'Express.js', 'javascript', 'Prisma'],
 'https://github.com/siBregas/TokoBarang_vue_express',
 TRUE
),
('project kelas online',
 'web tembat belajar coding online',
 'https://via.placeholder.com/500x300?text=Proyek+2',
 NULL,
 ARRAY['Laravel', 'php'],
 'https://github.com/KingEery/FP_PemrogWeb',
 FALSE
);
