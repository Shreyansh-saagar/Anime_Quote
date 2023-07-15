const container = () =>{
    document.getElementById("container").innerHTML=`
    <div class="card">
        <div class="box">
            <div class="icon">
                <div class="iconbox">
                    <lord-icon
                    src="https://cdn.lordicon.com/wloilxuq.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#ffffff"
                    state="hover-2">
                    </lord-icon>
                </div>
            </div>
            <div class="content">
                <h3 id="heading"></h3>
                <p id="quote"></p>
            </div>
        </div>
    </div>`
}
const animepromise = async (name) =>{
    let p = await fetch("https://animechan.xyz/api/random/anime?title="+ name)
    let response =  p.json()
    return response
}
const animeQuote = async ()=>{
    let a = await animepromise("Naruto")
    console.log(a)
    container()
    document.getElementById("heading").innerHTML= a.character
    document.getElementById("quote").innerHTML= a.quote

}
animeQuote()