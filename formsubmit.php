<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $commtitle = $_POST["commtitle"];
  $currency = $_POST["currency"];
  $commbudget = $_POST["commbudget"];
  $commdesc = $_POST["commdesc"];
  $commname = $_POST["commname"];
  $commcontact = $_POST["commcontact"];
  $tags = $_POST["tags"];
  $commdesc_br = nl2br($commdesc);

  // Create the HTML content
  $htmlContent = "<!DOCTYPE html>
<html>
  <head>
    
  </head>
<body>
  <div>
    <h1>$commtitle</h1>
    <h2>Name:</h2>
    <h3>$commname</h3>
    <h2>Budget</h2>
    <h3>$currency $$commbudget</h3>
    <h2>Description:</h2>
    <h3>$commdesc_br</h3>
    <h2>Contact info:</h2>
    <h3>$commcontact</h3>
    <h2>Tags:</h2>
    <h3>$tags</h3>
    </div>

    <style>
      @font-face {
        font-family: Montserrat;
        src: url(../fonts/MontserratAlternates-Regular.ttf);
      }
  
      @font-face {
        font-family: MontserratBold;
        src: url(../fonts/MontserratAlternates-Bold.ttf);
      }
  
      @font-face {
        font-family: Jost;
        src: url(../fonts/Jost-Regular.ttf);
      }
  
      html,
      body {
    
        background-image: url(images/bg_img.jpg);
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-size: cover;
        background-repeat: no-repeat;
      }
  
      ::-webkit-scrollbar {
        width: 7px;
      }
  
      ::-webkit-scrollbar-thumb {
        background-color: #a1a1a120;
        border-radius: 5px;
      }
  
      ::-webkit-scrollbar-thumb:hover {
        background-color: #a1a1a140;
    }
  
    div {
      flex: 1;
      border-radius: 20px;
      background-color: #1a1a1a;
      padding: 25px;
      padding-left: 50px;
      padding-right: 50px;
      margin: 0;
      border: 10px #666666;
      width: 50%;
      max-width: 50%;
      height: 75%;
      box-shadow: 0px 3px 10px 5px #00000070;
      overflow: auto;
      position: relative;
  }
  
  h1 {
    tex-align: center;
      font-size: 28px;
      font-family: Jost;
      color: white;
      margin-top: 0;
      ;
  }
  
  h2 {
      font-size: 24px;
      font-family: MontserratBold;
      color: white;
      margin-top: 0;
      margin-bottom: 10px;
  }

  h3 {
    font-size: 20px;
    font-family: Montserrat;
    color: #c9c9c9;
    margin-top: 0;
    margin-bottom: 25px;
}
    </styñe>

</body>
</html>";

  $filename = "$commtitle" . date("Ymd_His") . ".html";
  file_put_contents("tickets/" . $filename, $htmlContent);

  $submited = "hire_me.html";
  header("Location: $submited");
  exit;

}
?>