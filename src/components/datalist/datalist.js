import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import InfiniteScroller from "../infinitescroller/infinitescroller";
import SearchForm from "../searchform/searchform";
function DataList() {
  const data = useSelector((state) => state.data);

  return (
    <div className="data_list">
      <SearchForm />

      {data.errorMessage === "" ? (
        <InfiniteScroller data={data} />
      ) : (
        <h1>{data.errorMessage}</h1>
      )}
    </div>
  );
}
export default DataList;
