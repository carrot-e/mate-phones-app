class EventEmitter {
  constructor() {
    this._events = {};
  }

  emit(event, data) {
    if (this._events[event] === undefined) {
      return;
    }

    this._events[event].forEach((fn) => {
      fn(data);
    });
  }

  subscribe(event, callback) {
    if (this._events[event] === undefined) {
      this._events[event] = [];
    }

    this._events[event].push(callback);
  }
}

export default EventEmitter;
