
const Listener = {

  addListeners(entity, events) {
    for (let prop in this.props) {
      if (this.props.hasOwnProperty(prop) && events[prop]) {
        const addListener = google.maps.event.addListener;
        const listener = addListener(entity, events[prop], this.props[prop]);
        if (!this.listeners) {
          this.listeners = [];
        }
        this.listeners.push(listener);
      }
    }
  },

  addPathListeners(entity, events) {
    if(events) {
      let paths = entity.getPaths();
      paths.forEach((path) => {
        this.addListeners(path, events);
      });
    }
  },

  removeListeners() {
    if (window.google && this.listeners) {
      this.listeners.forEach((listener) => {
        google.maps.event.removeListener(listener);
      });
    }
  }

};

export default Listener;
