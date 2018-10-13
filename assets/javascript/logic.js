// Using jQuery .hover() to show labels when a portfolio icon is moused over
// When mouse enters the icon...
$(".port_link").hover(function() {
    // Grab the project-name attribute from the link that was hovered over
    const projectName = $(this).attr("project-name");
    // Grab the corresponding project title label and move it to the top of the icon
    $("#" + projectName + "-label").attr("style", "animation-name: moveLabel; animation-duration: 300ms; top: 0;");
    // Create a label to link to the deployed page
    const deployedLink = $(`<a class="port_icon_label deployed-link" id="${projectName}-deployed-link" href="https://djknit.github.io/${projectName}">Deployed Page</a>`);
    // Create a label to link to the repo and append it to the icon link
    const repoLink = $(`<a class="port_icon_label repo-link" id="${projectName}-repo-link" href="https://github.com/djknit/${projectName}">Repository</a>`);
    // After .1 seconds, append the links to the icon
    $(this).append(deployedLink).append(repoLink);
// When mouse leaves icon...
}, function() {
    // Grab the project-name attribute from the link that was hovered over
    const projectName = $(this).attr("project-name");
    // Move the title label back to its original position
    $("#" + projectName + "-label").attr("style", "top: 65.9%;");
    // Remove the links to the repo and the live page
    $("#" + projectName + "-repo-link").remove();
    $("#" + projectName + "-deployed-link").remove();
});