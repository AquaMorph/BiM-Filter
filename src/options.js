// Saves options to chrome.storage.sync.
function save_options() {
      var strike = document.getElementById('Strikethrough').checked;
      chrome.storage.sync.set({
          strike: strike
      }, function() {
          var status = document.getElementById('status');
          status.textContent = 'Options saved.';
          setTimeout(function() {
              status.textContent = '';
          }, 750);
      });
}

/*function saveChanges() {
        // Get a value saved in a form.
    var strike = document.getElementById('Strikethrough').checked;
    chrome.storage.local.set({'strike': strike});
}

function getChanges() {
    var strike = "";
    chrome.storage.local.get('strike', function (result) {
        strike = result.strike;
        window.alert(strike);
    });
}*/

function restore_options() {
    chrome.storage.sync.get({
        strike: true
    },function(items) {
        document.getElementById('Strikethrough').checked = items.strike;
    });
}
document.addEventListener('DOMContentLoaded', getChanges);
document.getElementById('save').addEventListener('click', saveChanges);