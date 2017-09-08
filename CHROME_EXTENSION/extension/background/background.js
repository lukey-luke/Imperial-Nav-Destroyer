/*
 * Function to toggle enabling of ship using localStorage variable.
 */
function toggleShip() {
  var shipEnabled;
  chrome.storage.local.get("imperialNavDestroyerEnabled", function(result) {
    shipEnabled = result.imperialNavDestroyerEnabled;

    if(shipEnabled == "true") {
      console.log('disabling ship');
      chrome.storage.local.set({imperialNavDestroyerEnabled: "false"});
    }
    else {
      console.log('enabling ship');
      chrome.storage.local.set({imperialNavDestroyerEnabled: "true"});
    }
  });

}

chrome.commands.onCommand.addListener( function(command) {
  if (command ==="toggle-ship") {
    alert("toggling!");
    toggleShip();
  }
});

