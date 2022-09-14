import React,{useContext} from "react";
import Cards from "../component/cards";
import { Context } from "../store/appContext"


const Psychology = () => {
  const {store, actions} = useContext(Context)
  return (
    <div className="">
      <h1 className="text-success text-center">Psicología</h1>
      <div className="d-flex">
      <Cards articles={store.psychology}/>
      </div>
    </div>
  );
};

export default Psychology;
