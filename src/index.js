/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      hoursToMaster=800;
      hoursFromNoobToMaster=hoursToMaster+500;

      //console.log(config);
      return Math.ceil(knowsProgramming ? hoursToMaster/config[focus]:hoursFromNoobToMaster/config[focus]);
  };
  