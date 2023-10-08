import ProductCard from "./components/ProductCard";
import Typography from "./components/Typography";
import "./style.css";

function App() {
  const courses = [
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
    {
      courseType: "Intensive Bootcamp",
      courseName: "Programming React JS",
      courseDescription: "(Getting started with React JS)",
      courseDetail: "Programing React Js",
      courseDetail2: "Getting started with React JS",
      courseDate: "Batch : September 2023",
      courseMentor: "Mentor  : Ardi Widyanto Saputra & Ade Armyatna Yusfantri",
      coursePrice: "Rp. 560.000",
    },
  ];

  const isShowFooter = true;

  const ShowFooter = (isShow) => {
    if (isShow) {
      return (
        <footer className="mt-[300px]">
          <p>&copy; 2023 HTML Javascript dan CSS</p>
        </footer>
      );
    }
    return <div>Hello World</div>;
  };

  return (
    <div>
      <header>
        <nav className="flex flex-row align-center">
          <h1 className="ml-[100px] mr-[600px] pt-[29px] text-[25px]">Logo</h1>
          <ul className="flex">
            <li className="ml-[150px] mr-[54px] pt-[29px]">
              <a href="#">Program</a>
            </li>
            <li className="mr-[54px] pt-[29px]">
              <a href="#">Bidang Ilmu</a>
            </li>
            <li className="mr-[54px] pt-[29px]">
              <a href="#">Tentang Edspert</a>
            </li>
            <button className="bg-[#FF6161] mt-[12px] rounded-[50px] gap-[10px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] ">Masuk Dan daftar</button>
          </ul>
        </nav>
        <div className="flex flex-row">
          <div>
            <h1 className="text-[42px] font-[800] ml-[100px] mt-[100px]">
              Jadi expert bersama <br />
              Edspert Id
            </h1>
            <h2 className="text-[16px] ml-[100px] mt-[25px]">
              Tingkatkan skill dan pengetahuan bersama para mentor <br />
              terbaik di bidangnya, untuk siapkan karir impian anda.
            </h2>
          </div>
          <div>
            <img className="ml-[290px] mb-0" src={"/assets/person2.png"} />
          </div>
        </div>
      </header>

      <main className="grid-main">
        {courses.map((course) => (
          <ProductCard
            key={course.courseName}
            courseType={course.courseType}
            courseName={course.courseName}
            courseDescription={course.courseDescription}
            courseDetail={course.courseDetail}
            courseDetail2={course.courseDetail2}
            courseDate={course.courseDate}
            courseMentor={course.courseMentor}
            coursePrice={course.coursePrice}
          ></ProductCard>
        ))}
      </main>
      {/* Inline If */}
      {/* {isShowFooter && <footer>
        <p>&copy; 2023 HTML Javascript dan CSS</p>
      </footer>}  */}

      {/* Inline If Else*/}
      {/* {isShowFooter ? <footer>
        <p>&copy; 2023 HTML Javascript dan CSS</p>
      </footer> : <div>Hello World</div>} */}

      <ShowFooter isShow={isShowFooter} />
    </div>
  );
}

export default App;
