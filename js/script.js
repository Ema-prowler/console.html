document.addEventListener("DOMContentLoaded", function () {
  const consoleDiv = document.getElementById("console");

  function addToConsole(text, element) {
    const tagName = element.tagName;
    const elementId = element.id ? "#" + element.id : "";
    const elementClass = element.className
      ? "." + element.className.replace(/\s+/g, ".")
      : "";
    consoleDiv.innerHTML +=
      "<p>" +
      text +
      " - Elemento: " +
      tagName +
      elementId +
      elementClass +
      "</p>";
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
  }

  function handleMouseOver(event) {
    const target = event.target;
    if (!consoleDiv.contains(target)) {
      addToConsole("Mouse sobre", target);
    }
  }

  document.addEventListener("mouseover", handleMouseOver);
});
