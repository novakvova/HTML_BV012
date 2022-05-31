let timerId = 0;
function deleteTag() {
    let searchItem = document.getElementsByTagName("center");
    if (searchItem.length > 0) {
        console.log("Search item", searchItem);
        var centerElement = searchItem[0];
        console.log("centerElement.nextSibling", centerElement.nextSibling);
        var el = centerElement.nextSibling;
        while (el) {
            node = el;
            el = el.nextSibling;
            node.remove();
          }
        // if (centerElement.nextSibling)
        //     centerElement.nextElementSibling.remove();

        // if (centerElement.nextSibling)
        //     centerElement.nextElementSibling.remove();

        
        // if (centerElement.nextSibling)
        //     centerElement.nextElementSibling.remove();

        // if (centerElement.nextSibling)
        //     centerElement.nextElementSibling.remove();

        centerElement.remove();
        clearInterval(timerId);
    }
    else {
        console.log("Not found element");
    }
}
timerId = setInterval(deleteTag, 200);