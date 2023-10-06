var arr = [
    {
        dp: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        story: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        story: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1646137313389-9ae8126c04b1"
    },
    {
        dp: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEhuJ2I757RmIhTaKJlE099gCsOaVhPPAmkSEM6n3L7rtgzN8t9FMbr_NOwxYIJbJ_KM&usqp=CAU"
    },
    {
        dp: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjcLciXflWwWcacpqtKOAZwK8xBGO_J2ZJum80HxXs11IdzbKUEUgIOVO3hz6nytl19I&usqp=CAU"
    },
    {
        dp: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        story: "https://th.bing.com/th/id/OIG.CSVZ6hd54HZAJwyZ8yBx"
    },
];

var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
 <img
     id="${idx}"
     src="${elem.dp}"
     alt="">
</div>`
})

var value = document.querySelector("#storiyan");
value.innerHTML = clutter;
value.addEventListener("click", function (dets) {
    var value1 = arr[dets.target.id].story;
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${value1})`;
    setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none"; I
    }, 6000)


    btn1.addEventListener("click", function () {
        document.querySelector("#full-screen").style.display = "none";
    })

})

var btn1 = document.querySelector(".btn");
