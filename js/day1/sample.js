<script>
  document.getElementById("demo1").innerHTML="this is dynamic text meesage"
  document.getElementById("demo2").innerHTML="hello! javascript "
  document.getElementById("mybtn").onclick=displaydate;
  function displaydate()
  {
document.getElementById("mydate").innerHTML=date()
  }
  </script>