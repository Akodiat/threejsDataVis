/**
 * Load data from CSV URL
 * @param {string} path Path to CSV
 * @param {function(any):void} callback Will be called when data is loaded
 */
function loadData(path, callback) {
    Papa.parse(path, {
        download: true, header: true,
        dynamicTyping: true,
        complete: results => {
          callback(results.data);
        }
    });
}

export {loadData};