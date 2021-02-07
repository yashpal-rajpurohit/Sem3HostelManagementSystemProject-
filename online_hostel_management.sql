-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2021 at 08:09 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_hostel_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_block`
--

CREATE TABLE `tbl_block` (
  `block_id` int(11) NOT NULL,
  `block_name` varchar(50) NOT NULL,
  `block_desc` varchar(500) NOT NULL,
  `block_gender` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_block`
--

INSERT INTO `tbl_block` (`block_id`, `block_name`, `block_desc`, `block_gender`) VALUES
(46, 'new hostel', 'this is new hostel for everyone', 'M'),
(47, 'girnar', 'Girnar is located near hostel mess', 'M'),
(48, 'new girls hostel', 'This hostel is for girls located near University Department of Fine Arts', 'F');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_city`
--

CREATE TABLE `tbl_city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(50) NOT NULL,
  `state_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_city`
--

INSERT INTO `tbl_city` (`city_id`, `city_name`, `state_id`) VALUES
(14, 'Valsad', 5),
(17, 'Surat', 5),
(18, 'Vadodara', 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_course`
--

CREATE TABLE `tbl_course` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `course_no_of_years` int(11) NOT NULL,
  `course_code` varchar(20) NOT NULL,
  `course_desc` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_course`
--

INSERT INTO `tbl_course` (`course_id`, `course_name`, `course_no_of_years`, `course_code`, `course_desc`) VALUES
(12, 'master of Information Communication Technology', 2, 'MscICT', 'this is 2 year post graduation course to impart student with knowledge of programming'),
(14, 'Msc Botany', 2, 'MSCBO', '2 year of msc botany course'),
(15, 'Phd Chemistry', 5, 'PHDCHM', 'a doctrate phd degree for qualified students'),
(16, 'Master of Science (Information Technology)', 5, 'MSCIT', 'This is 5 year Integegrated Course for IT carier');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_payment`
--

CREATE TABLE `tbl_payment` (
  `payment_id` int(11) NOT NULL,
  `payment_amount` decimal(10,0) NOT NULL,
  `user_id` int(11) NOT NULL,
  `payment_transaction_id` varchar(200) NOT NULL,
  `roomallocate_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_room`
--

CREATE TABLE `tbl_room` (
  `room_id` int(11) NOT NULL,
  `room_no` int(11) NOT NULL,
  `block_id` int(11) NOT NULL,
  `room_no_of_beds` int(11) NOT NULL,
  `room_desc` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_room`
--

INSERT INTO `tbl_room` (`room_id`, `room_no`, `block_id`, `room_no_of_beds`, `room_desc`) VALUES
(6, 3, 45, 3, 'this is room no 3 of satrunjay for 3 persons'),
(7, 4, 45, 2, 'this is room no 2 persons'),
(8, 12, 46, 2, 'This is the side room of first floor '),
(9, 1, 47, 1, 'This is one bed room located in girnar'),
(11, 10, 47, 1, 'This is for 2 students Every Student will have seperate Bed ,Table And a Chair');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_roomallocate`
--

CREATE TABLE `tbl_roomallocate` (
  `roomallocate_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `roomallocate_status` varchar(1) NOT NULL,
  `roomallocate_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_roomallocate`
--

INSERT INTO `tbl_roomallocate` (`roomallocate_id`, `room_id`, `user_id`, `roomallocate_status`, `roomallocate_date`) VALUES
(28, 7, 5, 'A', '2021-02-05'),
(32, 8, 5, 'A', '2021-02-05'),
(33, 11, 5, 'R', '2021-02-05');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_state`
--

CREATE TABLE `tbl_state` (
  `state_id` int(11) NOT NULL,
  `state_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_state`
--

INSERT INTO `tbl_state` (`state_id`, `state_name`) VALUES
(2, 'Punjab'),
(4, 'Tamil Nadu'),
(5, 'Gujarat');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_fname` varchar(50) NOT NULL,
  `user_mname` varchar(50) NOT NULL,
  `user_lname` varchar(50) NOT NULL,
  `user_course_id` int(11) NOT NULL,
  `user_roll_no` int(11) NOT NULL,
  `user_dob` date NOT NULL,
  `user_father_name` varchar(50) NOT NULL,
  `user_mother_name` varchar(50) NOT NULL,
  `user_gender` varchar(1) NOT NULL,
  `user_address` varchar(500) NOT NULL,
  `user_contact_no` varchar(10) NOT NULL,
  `user_parents_no` varchar(10) NOT NULL,
  `user_city_id` int(11) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(500) NOT NULL,
  `user_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_mname`, `user_lname`, `user_course_id`, `user_roll_no`, `user_dob`, `user_father_name`, `user_mother_name`, `user_gender`, `user_address`, `user_contact_no`, `user_parents_no`, `user_city_id`, `user_email`, `user_password`, `user_type_id`) VALUES
(5, 'yashpalsingh', 'girdharisingh', 'rajpurohit', 12, 47, '1997-05-02', 'girdharisingh rajpurohit', 'kiran devi', 'M', 'alkapuri society vapi town vapi', '9601638311', '9998758746', 1, 'yashpalsingh1708@gmail.com', '12341234', 2),
(7, '', '', '', 0, 0, '0000-00-00', '', '', '', '', '', '', 0, 'adminuser@gmail.com', '12345678', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_block`
--
ALTER TABLE `tbl_block`
  ADD PRIMARY KEY (`block_id`);

--
-- Indexes for table `tbl_city`
--
ALTER TABLE `tbl_city`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `tbl_course`
--
ALTER TABLE `tbl_course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `tbl_payment`
--
ALTER TABLE `tbl_payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `tbl_room`
--
ALTER TABLE `tbl_room`
  ADD PRIMARY KEY (`room_id`);

--
-- Indexes for table `tbl_roomallocate`
--
ALTER TABLE `tbl_roomallocate`
  ADD PRIMARY KEY (`roomallocate_id`);

--
-- Indexes for table `tbl_state`
--
ALTER TABLE `tbl_state`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_block`
--
ALTER TABLE `tbl_block`
  MODIFY `block_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `tbl_city`
--
ALTER TABLE `tbl_city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_course`
--
ALTER TABLE `tbl_course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_payment`
--
ALTER TABLE `tbl_payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_room`
--
ALTER TABLE `tbl_room`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_roomallocate`
--
ALTER TABLE `tbl_roomallocate`
  MODIFY `roomallocate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `tbl_state`
--
ALTER TABLE `tbl_state`
  MODIFY `state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
