window.addEventListener("DOMContentLoaded", () =>{
    const stars = document.querySelector(".stars");

    //星の生成関数
    const createStar = () =>{
        const starEl = document.createElement("span");  //spanタグを生成し、starというクラスを付与
        starEl.className = "star";  
        const minSize = 1;  //星の最小サイズ
        const maxSize = 3;  //星の最大サイズ
        const size = Math.random() * (maxSize - minSize) + minSize;


        //星のサイズをバラバラにする
        starEl.style.width = `${size}px`;
        starEl.style.height = `${size}px`;

        //星の発生位置をバラバラにする
        starEl.style.left = `${Math.random() * 100}%`;
        starEl.style.top = `${Math.random() * 100}%`;

        //星の発生タイミングをバラバラにする
        starEl.style.animationDelay = `${Math.random() * 10}s`;
        
        //完成した星を親要素に追加する
        stars.appendChild(starEl);


    };

    //for文で指定した回数生成関数を呼び出す
    for(let i = 0; i <= 500; i++){
        createStar();

    }
})