-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2022 at 02:48 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taalimulquran`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `adminid` int(150) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`adminid`, `username`, `password`, `email`) VALUES
(1, 'test admin', '5f4dcc3b5aa765d61d8327deb882cf99', 'admin@admin.com');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `added_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `title`, `status`, `added_on`) VALUES
(1, 'test course', 1, '2022-10-15 12:22:25');

-- --------------------------------------------------------

--
-- Table structure for table `madrasas`
--

CREATE TABLE `madrasas` (
  `id` int(150) NOT NULL,
  `madrasa_title` varchar(250) NOT NULL,
  `madrasa_address` varchar(250) NOT NULL,
  `madrasa_student_count` varchar(250) NOT NULL,
  `madrasa_teacher_count` varchar(250) NOT NULL,
  `madrasa_jamiat_id` varchar(250) NOT NULL,
  `madrasa_jamaat_id` varchar(250) NOT NULL,
  `added_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `madrasas`
--

INSERT INTO `madrasas` (`id`, `madrasa_title`, `madrasa_address`, `madrasa_student_count`, `madrasa_teacher_count`, `madrasa_jamiat_id`, `madrasa_jamaat_id`, `added_on`, `status`) VALUES
(1, 'test madrasa', 'test address', '0', '0', '12', '5', '2022-10-15 10:58:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `principals`
--

CREATE TABLE `principals` (
  `id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `user_id` varchar(250) NOT NULL,
  `madrasa_id` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `added_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `madrasa_id` varchar(250) NOT NULL,
  `course_id` varchar(250) NOT NULL,
  `user_id` varchar(250) NOT NULL,
  `its_number` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `added_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `course_id` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `added_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `user_id` varchar(250) NOT NULL,
  `madrasa_id` varchar(250) NOT NULL,
  `courses_count` varchar(250) NOT NULL,
  `subjects_count` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `added_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_subjects`
--

CREATE TABLE `teacher_subjects` (
  `id` int(11) NOT NULL,
  `teacher_id` varchar(250) NOT NULL,
  `subject_id` varchar(250) NOT NULL,
  `alloted_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(150) NOT NULL,
  `username` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `user_type` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`adminid`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `madrasas`
--
ALTER TABLE `madrasas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `principals`
--
ALTER TABLE `principals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher_subjects`
--
ALTER TABLE `teacher_subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `adminid` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `madrasas`
--
ALTER TABLE `madrasas`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `principals`
--
ALTER TABLE `principals`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teacher_subjects`
--
ALTER TABLE `teacher_subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
