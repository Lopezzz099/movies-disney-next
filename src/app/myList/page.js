"use client";

import CardMovie from "@/components/common/cardMovie/CardMovie";
import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";

const MyList = () => {
  const { myList } = useSelector((store) => store.favSlice);

  return (
    <>
      {myList.length === 0 && (
        <div
          className="flex items-center justify-center"
          style={{ paddingTop: "100px" }}
        >
          <div
          className="flex items-center justify-center"
            style={{ backgroundColor: "green", width: "100%", height: "100%" }}
          >
            <AiFillPlusCircle style={{ width: "120px", height: "120px" }} />
          </div>
        </div>
      )}
      {
        <div style={{ paddingTop: "100px" }}>
          <div
            className="grid grid-cols-5 gap-7"
            style={{ padding: "0 calc(3.5vw + 24px)" }}
          >
            {myList.map((movie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default MyList;
