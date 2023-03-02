import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation(); //location 객체
    //http://localhost:3000/about?name=green&age=60
    //{ name: "green" , age: "60"}
    const [ searchParams, setSearchParams ] = useSearchParams();  // ---> 배열리턴
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    console.log(location);
    return (
        <div>
           <h2>소개페이지</h2> 
           <p>소개페이지 입니다.</p>
           <p>{location.search}</p>
           <p>name 값은 {name}</p>
           <p>age 값은 {age}</p>
        </div>
    );
};

export default About;