/* eslint-disable no-unused-vars */
/*
 * This class singleton should provide functions that interact with Home Assistant
 */

class TimeService {
  constructor(
    _eventCallback,
    _logger = false,
    _additionalOpts = { frequency: 1000 }
  ) {
    const { frequency } = _additionalOpts;
    this.frequency = frequency;
    this.eventCallback =
      typeof _eventCallback === 'function' ? _eventCallback : false;
    this.init();
  }

  init = async () => {
    setInterval(() => {
      if (typeof this.eventCallback === 'function') {
        this.eventCallback({});
      }
    }, this.frequency);
  };

  setEventCallback = cb => {
    this.eventCallback = cb;
  };
}

export default TimeService;
