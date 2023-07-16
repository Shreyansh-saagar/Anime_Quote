const container = () =>{
    document.getElementById("container").innerHTML=`
    <div class="card">
        <div class="box">
            <div class="icon">
                <div class="iconbox">
                </div>
            </div>
            <div class="content">
                <h3 id="heading"></h3>
                <div id="scroll">
                <p id="quote"></p>
                <div>
            </div>
        </div>
    </div>`
}
const animepromise = async (name) =>{
    let p = await fetch("https://animechan.xyz/api/random/anime?title="+name)
    let response =  p.json()
    return response
}
const animeQuote = async ()=>{
    let pro = prompt("Enter Anime name:")
    let a = await animepromise(pro)
    console.log(a)
    container()
    document.getElementById("heading").innerHTML= a.character
    document.getElementById("quote").innerHTML= a.quote

}
animeQuote()
