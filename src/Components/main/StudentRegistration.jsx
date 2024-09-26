/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Layout from "../Layout/Layout";
import { FaUpload } from "react-icons/fa";
import PinInput from "../SubComponents/Common/PinInput";

const StudentRegistration = () => {
  const [image, setImage] = useState(null);

  const [localPinCode, setLocalPinCode] = useState(["", "", "", "", "", ""]);
  const [permanentPinCode, setPermanentPinCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [selectObjects] = useState({
    categories: ["ST", "SC", "General", "OBC"],
    classOptions: ["9", "10", "11", "12", "dropper"],
    streams: ["PCM", "PCB", "PCMB", "Commerce", "Arts"],
    schoolType: ["Govt.", "Private"],
    medium: ["English", "Hindi"],
    board: ["CBSE", "RBSE", "Other"],
  });

  // destructuring the selectedObjects----
  const { categories, classOptions, streams, schoolType, medium, board } =
    selectObjects;

  const [selectedCategory, setSelectedCategory] = useState(""); // For input value

  const [selectedClass, setSelectedClass] = useState("");

  const [selectedStream, setSelectedStream] = useState("");

  const [selectedSchoolType, setSelectedSchoolType] = useState("");

  const [selectedMedium, setSelectedMedium] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");

  // ========FUNCTIONS ========
  // preview image=====
  const handlePreview = (e) => {
    const file = e.target.files[0];
    const filereader = new FileReader();
    filereader.onload = () => {
      setImage(filereader.result);
    };
    filereader.readAsDataURL(file);
  };

  //  form submission=====
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="bg-white py-10 px-5 md:px-5 max-w-[800px] mx-auto rounded-sm ">
        <h2 className="text-primary_orange text-center  mb-10 font-bold uppercase">
          Student Registration Form
        </h2>
        <form
          action=""
          onSubmit={handleFormSubmit}
          className="w-full mt-5 max-w-[600px] mx-auto"
        >
          {/* =======IMAGE======== */}
          <div className="relative mx-auto  mb-10 text-center h-24 w-24 border-solid border-gray-500 border-[1px] rounded-full outline-4 outline-gray-300  outline-offset-2 outline ">
            <div className=" h-full w-full overflow-hidden rounded-full ">
              {image && (
                <img
                  src={
                    image instanceof Blob ? URL.createObjectURL(image) : image
                  }
                  alt="image"
                  className="object-cover h-full w-full"
                />
              )}

              {!image && (
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 h-28 w-28 -translate-x-2 translate-y-1 "
                >
                  <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                </svg>
              )}
            </div>
            <label
              htmlFor="studentImage"
              className="absolute text-xs text-primary_blue tracking-wide top-[65%] -right-[8px] bg-primary_gray p-2 rounded-full hover:bg-secondary_orange cursor-pointer"
            >
              <FaUpload className="text-white h-full " />
            </label>
            <input
              type="file"
              name="studentImage"
              id="studentImage"
              className="hidden"
              onChange={handlePreview}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-10">
            {/* =======CLASS======== */}

            <div className=" relative  grid grid-rows-2 mb-3 [&:focus-within>ul]:visible">
              <label
                htmlFor="studentClass"
                className="text-sm text-primary_blue tracking-wide"
              >
                Class :
              </label>
              <input
                type="text"
                name="studentClass"
                id="studentClass"
                value={selectedClass}
                placeholder="Select class"
                readOnly
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider w-[70%] md:w-auto"
              />
              <ul className="invisible absolute left-[30%] md:left-[50%] z-10 top-14  shadow-lg bg-red-50 text-sm py-2 rounded w-28 text-center max-h-24 overflow-y-scroll scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin grid  ">
                {classOptions.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-red-100 cursor-pointer py-1  "
                    onMouseDown={() => setSelectedClass(item)}
                  >
                    {item}
                    {item !== "dropper" && <sup> th</sup>}
                  </li>
                ))}
              </ul>
            </div>
            {/* =======STREAM======== */}

            <div className="relative  grid grid-rows-2 mb-3 [&:focus-within>ul]:visible">
              <label
                htmlFor="studentStream"
                className="text-sm text-primary_blue tracking-wide"
              >
                Subject / Stream :
              </label>
              <input
                type="text"
                name="studentStream"
                id="studentStream"
                value={selectedStream}
                placeholder="PCM"
                readOnly
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider w-[70%] md:w-auto"
              />
              <ul className="invisible absolute left-[30%] md:left-[50%] z-10 top-14  shadow-lg bg-red-50 text-sm py-2 rounded w-28 text-center max-h-24 overflow-y-scroll scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin grid  ">
                {streams.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-red-100 cursor-pointer py-1  "
                    onMouseDown={() => setSelectedStream(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* =======SESSION======== */}
          <div className="w-full grid grid-rows-2 mb-3">
            <label
              htmlFor="session"
              className="text-sm text-primary_blue tracking-wide"
            >
              Session :
            </label>
            <input
              type="number"
              min="1900"
              max="2099"
              step="1"
              name="session"
              id="session"
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider w-[70%]"
            />
          </div>
          {/* =======STUDENT NAME======== */}
          <div className="w-full grid grid-rows-2 mb-3">
            <label
              htmlFor="studentName"
              className="text-sm text-primary_blue tracking-wide"
            >
              Student Name :
            </label>
            <input
              type="text"
              name="studentName"
              id="studentName"
              placeholder="John Doe"
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider "
            />
          </div>
          {/* =======DATE OF BIRTH======== */}
          <div className="w-full grid grid-rows-2 mb-3 ">
            <label
              htmlFor="dateInput"
              className="text-sm text-primary_blue tracking-wide"
            >
              Date of Birth :
            </label>
            <input
              type="date"
              name="dateInput"
              id="dateInput"
              placeholder="Select a date"
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider w-[70%] bg-red-50 empty:bg-white "
            />
          </div>
          {/* =======CATEGORY======== */}
          <div className="relative w-full grid grid-rows-2 mb-3 [&:focus-within>ul]:visible">
            <label
              htmlFor="studentCategory"
              className="text-sm text-primary_blue tracking-wide"
            >
              Category:
            </label>
            <input
              name="studentCategory"
              id="studentCategory"
              value={selectedCategory}
              readOnly
              placeholder="Select category"
              className="border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider w-[70%] "
            />

            <ul className="invisible absolute left-[30%] z-10 top-14  shadow-lg bg-red-50 text-sm py-2 rounded w-28 text-center max-h-24 overflow-y-auto scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin grid  ">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-red-100 cursor-pointer py-1 "
                  onMouseDown={() => setSelectedCategory(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* =======PARENTS======== */}
          <div className="w-full grid grid-rows-2 mb-3">
            <label
              htmlFor="fatherName"
              className="text-sm text-primary_blue tracking-wide"
            >
              Father's Name :
            </label>
            <input
              type="text"
              name="fatherName"
              id="fatherName"
              placeholder="John Doe"
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid "
            />
          </div>
          <div className="w-full grid grid-rows-2 mb-3">
            <label
              htmlFor="motherName"
              className="text-sm text-primary_blue tracking-wide"
            >
              Mother's Name :
            </label>
            <input
              type="text"
              name="motherName"
              id="motherName"
              placeholder="John Doe"
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider"
            />
          </div>
          {/* =======OCCUPATIONS======== */}
          <div className="w-full grid grid-rows-2 mb-3">
            <label
              htmlFor="fatherOccupation"
              className="text-sm text-primary_blue tracking-wide"
            >
              Father's Occupation :
            </label>
            <input
              type="text"
              name="fatherOccupation"
              id="fatherOccupation"
              placeholder="Occupation"
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider"
            />
          </div>
          <div className="w-full grid grid-rows-2 mb-3">
            <label
              htmlFor="motherOccupation"
              className="text-sm text-primary_blue tracking-wide"
            >
              Mother's Occupation :
            </label>
            <input
              type="text"
              name="motherOccupation"
              id="motherOccupation"
              placeholder="Occupation"
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider"
            />
          </div>
          {/* =======ADDRESSES======== */}
          <div className="w-full grid grid-rows-2 mb-3">
            <label
              htmlFor="localAddress"
              className="text-sm text-primary_blue tracking-wide"
            >
              Local Address :
            </label>
            <textarea
              name="localAddress"
              id="localAddress"
              placeholder="Type the Address..."
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-14px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider "
            ></textarea>
          </div>
          <div className="flex gap-x-4 my-5">
            <span className="text-sm text-primary_blue tracking-wide">
              Pin No. :
            </span>
            <div className="pin-input-div flex mt-[-4px] gap-x-2">
              <PinInput
                pinCode={localPinCode}
                idPrefix="local"
                setPinCode={setLocalPinCode}
              />
            </div>
          </div>
          <div className="w-full grid grid-rows-2 mb-3">
            <label
              htmlFor="permanentAddress"
              className="text-sm text-primary_blue tracking-wide"
            >
              Permanent Address :
            </label>
            <textarea
              name="permanentAddress"
              id="permanentAddress"
              placeholder="Type the Address..."
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-14px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider "
            ></textarea>
          </div>
          <div className="flex gap-x-4 my-5">
            <span className="text-sm text-primary_blue tracking-wide">
              Pin No. :
            </span>
            <div className="pin-input-div flex mt-[-4px] gap-x-2">
              <PinInput
                pinCode={permanentPinCode}
                idPrefix="permanent"
                setPinCode={setPermanentPinCode}
              />
            </div>
          </div>
          {/* =======CONTACTS======== */}
          <div className="w-full grid  mb-3">
            <span className="text-sm text-primary_blue tracking-wide">
              Contact Details :
            </span>
            <div className="w-full grid md:grid-cols-2 gap-x-10 gap-y-5  mt-2">
              <input
                type="tel"
                name="studentContact"
                id="studentContact"
                placeholder="Student's no."
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider w-[70%] md:w-auto  "
              />

              <input
                type="tel"
                name="fatherContact"
                id="fatherContact"
                placeholder="Father's No."
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider w-[70%] md:w-auto"
              />

              <input
                type="tel"
                name="motherContact"
                id="motherContact"
                placeholder="Mother's No."
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider w-[70%] md:w-auto"
              />

              <input
                type="tel"
                name="whatsapp"
                id="whatsapp"
                placeholder="Whatsapp No."
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider w-[70%] md:w-auto"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-10">
            {/* =======EMAIL======== */}
            <div className="w-full grid grid-rows-2 mb-3">
              <label
                htmlFor="email"
                className="text-sm text-primary_blue tracking-wide"
              >
                Email :
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Parent's email address"
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider w-[70%] md:w-auto"
              />
            </div>
            {/* =======ADHAAR No.======== */}
            <div className="w-full grid grid-rows-2 mb-3">
              <label
                htmlFor="adhaar"
                className="text-sm text-primary_blue tracking-wide"
              >
                Adhaar No. :
              </label>
              <input
                type="text"
                name="adhaar"
                id="adhaar"
                placeholder="Student's Adhaar Number"
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider w-[70%] md:w-auto"
              />
            </div>
          </div>
          {/* =======SCHOOL======== */}
          <div className="w-full grid grid-rows-2 mb-3">
            <label
              htmlFor="school"
              className="text-sm text-primary_blue tracking-wide"
            >
              School Name :
            </label>
            <input
              type="text"
              name="school"
              id="school"
              placeholder="School name"
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-10">
            {/* =======SCHOOL TYPE======== */}
            <div className="relative w-full grid grid-rows-2 mb-3 [&:focus-within>ul]:visible">
              <label
                htmlFor="schoolType"
                className="text-sm text-primary_blue tracking-wide"
              >
                School Type :
              </label>
              <input
                type="text"
                name="schoolType"
                id="schoolType"
                value={selectedSchoolType}
                placeholder="Select School Type"
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider w-[70%] md:w-auto"
              />
              <ul className="invisible absolute left-[30%] md:left-[50%] z-10 top-14  shadow-lg bg-red-50 text-sm py-2 rounded w-28 text-center max-h-24 overflow-y-auto scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin grid  ">
                {schoolType.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-red-100 cursor-pointer py-1 "
                    onMouseDown={() => setSelectedSchoolType(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* =======MEDIUM======== */}
            <div className="relative w-full grid grid-rows-2 mb-3 [&:focus-within>ul]:visible">
              <label
                htmlFor="medium"
                className="text-sm text-primary_blue tracking-wide"
              >
                Medium:
              </label>
              <input
                type="text"
                name="medium"
                id="medium"
                value={selectedMedium}
                placeholder="Select School Type"
                className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider w-[70%] md:w-auto "
              />
              <ul className="invisible absolute left-[30%] md:left-[50%] z-10 top-14  shadow-lg bg-red-50 text-sm py-2 rounded w-28 text-center max-h-24 overflow-y-auto scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin grid  ">
                {medium.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-red-100 cursor-pointer py-1 "
                    onMouseDown={() => setSelectedMedium(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =======BOARD======== */}
          <div className="relative w-full grid grid-rows-2 mb-3 [&:focus-within>ul]:visible">
            <label
              htmlFor="board"
              className="text-sm text-primary_blue tracking-wide"
            >
              Board:
            </label>
            <input
              type="text"
              name="board"
              id="board"
              value={selectedBoard}
              placeholder="Select School Type"
              className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider w-[70%]"
            />
            <ul className="invisible absolute left-[30%] z-10 top-14  shadow-lg bg-red-50 text-sm py-2 rounded w-28 text-center max-h-24 overflow-y-auto scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin grid  ">
              {board.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-red-100 cursor-pointer py-1 "
                  onMouseDown={() => setSelectedBoard(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* =======LAST YEAR PERFORMANCE======== */}
          <div className="w-full mb-3 mt-5   overflow-x-auto">
            <p className="text-sm text-primary_blue tracking-wide mb-3">
              Last Year Academic Performance:
            </p>
            <table className="table-fixed border border-solid border-primary_gray max-w-[700px] box-border">
              <thead>
                <tr className="w-full">
                  <th className="border border-solid border-primary_gray w-[12%]">
                    Class
                  </th>
                  <th className="border border-solid border-primary_gray w-[12%]">
                    Passing Year
                  </th>
                  <th className="border border-solid border-primary_gray w-[22%]">
                    Name of School
                  </th>
                  <th className="border border-solid border-primary_gray w-[14%]">
                    Board
                  </th>
                  <th className="border border-solid border-primary_gray w-[20%]">
                    % Marks 10 <sup>th</sup>
                  </th>
                  <th className="border border-solid border-primary_gray w-[20%]">
                    % Marks (PCM/B)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-solid border-primary_gray">
                    <input
                      type="text"
                      placeholder="class"
                      className="w-full rounded-none focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider text-xs px-2 py-1"
                    />
                  </td>
                  <td className="border border-solid border-primary_gray">
                    <input
                      type="text"
                      placeholder="year"
                      name="prevYear"
                      className="w-full rounded-none focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider text-xs px-2 py-1"
                    />
                  </td>
                  <td className="border border-solid border-primary_gray">
                    <input
                      type="text"
                      placeholder="School"
                      name="prevSchool"
                      className="w-full rounded-none focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider text-xs px-2 py-1"
                    />
                  </td>
                  <td className="border border-solid border-primary_gray">
                    <input
                      type="text"
                      placeholder="board"
                      name="prevBoard"
                      className="w-full rounded-none focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider text-xs px-2 py-1"
                    />
                  </td>
                  <td className="border border-solid border-primary_gray">
                    <input
                      type="text"
                      placeholder="marks"
                      name="prevMarks1"
                      className="w-full rounded-none focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider text-xs px-2 py-1"
                    />
                  </td>
                  <td className="border border-solid border-primary_gray">
                    <input
                      type="text"
                      placeholder="marks"
                      name="prevMarks2"
                      className="w-full rounded-none focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider text-xs px-2 py-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* =======BUTTON======== */}
          <div className="w-full mt-10 grid place-items-center">
            <button
              type="submit"
              className="text-sm tracking-wider bg-primary_blue text-white hover:bg-secondary_blue rounded py-2 px-5 text-center transition:background"
            >
              Register Student
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default StudentRegistration;
