import './App.css';

function App() {



  return (
    <div className="App">
      <div className="black-nav">
        <div>도비 Blog</div>
      </div>
      <button className="btn btn-info" value={"딜러"}>
        딜러
      </button>
      <button className="btn btn-info" value={"서폿"}>
        서폿
      </button>
      <div>
        닉네임 :
        <input type="text" />
      </div>
      <div>
        관문 :
        <select>
          <option value="dif">난이도</option>
          <option value="normal">노말</option>
          <option value="hard">하드</option>
        </select>
        <select>
          <option value="act">장막</option>
          <option value="prev">서막</option>
          <option value="act1">1막</option>
          <option value="act2">2막</option>
          <option value="act3">3막</option>
          <option value="act4">4막</option>
          <option value="final">종막</option>
        </select>
        <select>
          <option value="gate">관문</option>
          <option value="gate1">1관</option>
          <option value="gate2">2관</option>
          <option value="gate3">3관</option>
        </select>
      </div>
      <div>
        전투시간 :
        <input type="text" />
      </div>
      <div>
        시너지 유효율 :
        <input type="text" />
      </div>
      <div>
        초당 피해량 :
        <input type="text" />
      </div>
      <div>
        <button>
          입력
        </button>
      </div>
    </div >
  );
}

export default App;
