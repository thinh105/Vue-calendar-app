import { seedData } from './seed';

export const store = {
  state: {
    seedData,
  },
  getActiveDay() {
    return this.state.seedData.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false);
    });
    return this.state;
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({
      details: eventDetails,
      edit: false,
    });
  },
  editEvent(dayId, eventDetails) {
    this.resetEditStates();
    const eventObj = this.getEventObj(dayId, eventDetails);
    eventObj.edit = true;
  },
  getEventObj(dayId, eventDetails) {
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find(
      (event) => event.details === eventDetails
    );
    return eventObj;
  },
  updateEvent(dayId, oldEventDetails, newEditedDetails) {
    const eventObj = this.getEventObj(dayId, oldEventDetails);
    eventObj.details = newEditedDetails;
    eventObj.edit = false;
  },
  resetEditStates() {
    this.state.seedData.map((dayObj) => {
      dayObj.events.map((event) => {
        event.edit = false;
      });
    });
  },
  deleteEvent(dayId, eventDetails) {
    const dayObj = this.state.seedData.find((day) => day.id === dayId);

    const indexDeletedEvent = dayObj.events.findIndex(
      (e) => e.details === eventDetails
    );
    dayObj.events.splice(indexDeletedEvent, 1);
  },
};
