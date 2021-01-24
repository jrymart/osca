// variable names
var IDKey = "entryID"
var isPairKey = "isConsecutivePair"
var coopKey = "coop"
var diningCapacityKey = "diningCapacity"
var housingCapacityKey = "housingCapacity"
var 
function getLotteryEntries() {
	// to be replaced with db call
	return [{entryID: 1234, name: "Ivanna Pee"},
					 {entryID: 5678, name: "Miss Direction"}, 
					 {entryID: 90210, name: "Corey Dreamcicle"}
				  ];
};

function getLotteryOrder(lotteryEntries) {
	// handles consecutive pairs
};

function generateCoopSpace(coop) {
	var space_entry = {coopKey:coop[coopKey], housingCapacityKey: coop[housingCapacityKey]};
}

function getAssignments(lotteryEntries, lotteryConstraints) {
	lotteryEntries.forEach(entry => {
		entry[preferencesKey].forEach(function (preference, index) {
			if coopSpaces[preference][freeSpaceKey] > 0 {
				coopSpaces[preference][freSpaceKey]--
				entry[assignmentKey] = preference
				break		
		})
	})

module.exports = { getLotteryEntries };
