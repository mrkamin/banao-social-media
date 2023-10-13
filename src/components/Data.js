import IMG1 from "./assets/Rectangle 5.png";
import IMG2 from "./assets/Rectangle 5 (1).png";
import IMG3 from "./assets/Rectangle 5 (2).png";
import IMG4 from "./assets/Rectangle 3 (1).png";
import IMG5 from "./assets/Rectangle 3 (2).png";
import IMG6 from "./assets/Rectangle 3 (3).png";
import IMG7 from "./assets/Rectangle 3 (4).png";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import {CiCalendarDate} from 'react-icons/ci'

const Data = [
  {
    id: 1,
    image: IMG1,
    category: "✍️ Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    details:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    date: "",
    location: "",
    visit: "",
    userimage: IMG4,
    userName: "Sarthak Kamra",
  },
  {
    id: 2,
    image: IMG2,
    category: "🔬️ Education",
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    details:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    date: "",
    location: "",
    visit: "",
    userimage: IMG5,
    userName: "Sarah West",
  },
  {
    id: 3,
    image: IMG3,
    category: "🗓️ Meetup",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    details: "",
    dateSign: <CiCalendarDate />,
    date: " Fri, 12 Oct, 2018",
    locationSingn: <MdOutlineLocationOn />,
    location: "Ahmedabad, India",
    visit: <button className="btn btn-light w-100">Visit Site</button>,
    userimage: IMG6,
    userName: "Ronal Jones",
  },
  {
    id: 4,
    category: "💼️ Job",
    title: "Software Developer",
    details: "",
    date: "",
    companySingn: <TbDeviceAnalytics />,
    company: " Innovaccer Analytics Private Ltd.",
    locationSingn: <MdOutlineLocationOn />,
    location: "Noida, India",
    visit: <button className="btn btn-light w-100">Apply on TimesJobs</button>,
    userimage: IMG7,
    userName: "Joseph Gray",
  },
];
export default Data;
