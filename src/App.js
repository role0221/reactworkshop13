import { useEffect, useState } from 'react';
import './App.css';
import MenuData from "./data/MenuData"
import FoodComponents from './Components/FoodComponents';

function App() {
  const [Fooddata,setFooddata] = useState(MenuData)
  const [DataPage,setDataPage] = useState([])
  const [page,setpage] = useState(0)
  
  const pagination=()=>{
    const foodperpage = 3
    const pages =  Math.ceil(MenuData.length / foodperpage)
    const newFood = Array.from({length:pages},(data,index)=>{
      const start = index * foodperpage
      return MenuData.slice(start,start+foodperpage)
    })
    return newFood
  }
    const handlePage=(index)=>{
      setpage(index)
    }
  useEffect(()=>{
     const paginate = pagination()
     setDataPage(paginate)
     setFooddata(paginate[page])
  },[page])

  return (
    <div className='App'>
    <h1>FoodCard | Pagination</h1>
    <div className='container'>
    {Fooddata.map((data,index)=>{
        return <FoodComponents key={index} {...data} />
    })}
    </div>
        <div className='pagination-container'>
            {DataPage.map((data,index)=>{
              return (
                <button className={`btn-page ${index === page ? "btn-active" : null}`} key={index} onClick={()=>handlePage(index)}>
                  {index+1}
                </button>
              )
            })}
        </div>
    </div>

  );
}

export default App;
