/**
 * @file    valda.js
 * @brief   JS library for fast short easy analyse, assert, check, validate, parse data
 * @author  Dmitrii Arshinnikov <www.telemok.com@gmail.com> https://github.com/Telemok
 * @version 0.1
 * @date 2022-12-02
 *
@verbatim
			Copyright (c) 2022 telemok.com Dmitrii Arshinnikov

			Licensed under the Apache License, Version 2.0(the "License");
			you may not use this file except in compliance with the License.
			You may obtain a copy of the License at

			http://www.apache.org/licenses/LICENSE-2.0

			Unless required by applicable law or agreed to in writing, software
			distributed under the License is distributed on an "AS IS" BASIS,
			WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
			See the License for the specific language governing permissions and
			limitations under the License.
@endverbatim
 */
//import { valda } from "valda"

const valdaAssertVarNameRegex = new RegExp(/^([a-zA-Z_]+)([a-zA-Z0-9_]*)$/);

const symbol_listeners = Symbol();
export class EventTargetStrict// extends EventTarget
{
	constructor() {
		this[symbol_listeners] = new Map();
	}
	getEventTypeInfo(eventType) {
		if (!this[symbol_listeners].has(eventType)) {
			let listText = this.toStringEventTypes();
			//console.log("this[symbol_listeners]", this[symbol_listeners])
			throw new Error(`EventTargetStrict(type="${eventType}" not supported). Try one of this: [${listText}].`);
		}
		return this[symbol_listeners].get(eventType);
	}
	// getEventTypeCountListeners(eventType) {//counter may be used, if you don't want to do hard work for absent listeners
	// 	let eventInfo = this.getEventTypeInfo(eventType);
	// 	return eventInfo.list.size;
	// }
	addEventTypes(eventType) {
		if (eventType instanceof Array) {
			for (let i in eventType)
				this.addEventTypes(eventType[i]);
			return;
		}
		if (typeof eventType !== 'string' || !valdaAssertVarNameRegex.test(eventType))/* reg.test(['name']) is OK like reg.test('name') */
		{
			let error = new Error(`EventTargetStrict.addEventTypes(wrong eventType="${eventType}")`);
			error.name = "EVENT_TYPE_MUST_BE_LIKE_A_VAR_NAME";
			throw error;
		}
		//eventType = valda.varName.assert(eventType, `EventTargetStrict.addEventTypes`);
		if (this[symbol_listeners].has(eventType))
		{
			let error = new Error(`EventTargetStrict.addEventTypes(exists eventType: "${eventType}")`);
			error.name = "EVENT_TYPE_EXISTS";
			throw error;
		}
		this[symbol_listeners].set(eventType, {
			list: new Set(),
			countDispatchs: 0
		});
	}
	reDispatchEvent(event) {
		let newEvent = new event.constructor(event.type, event);
		this.dispatchEvent(newEvent);
	}
	dispatchEvent(event) {
		if (!(event instanceof Event))
		{
			let error = new Error(`EventTargetStrict.dispatchEvent(event must be instanceof Event)`);
			error.name = "CAN_NOT_DISPATCH_NOT_EVENT";
			throw error;
		}
		/* event must be instanceof Event, no assertion no raise speed */
		let eventInfo = this.getEventTypeInfo(event.type);
		eventInfo.countDispatchs++;

		for (let obj of eventInfo.list.values()) {
			try {
				obj.listener.call(this, event);
			} catch (err) {
				if (window.EventTargetStrict_FLAG_DEBUG_EVENTS)
					console.error(err);
			}
		}

		return !event.defaultPrevented;
	}
	dispatchEventIfNeed(type, callback)
	{
		let eventInfo = this.getEventTypeInfo(type);
		if (!eventInfo.list.size)
			return;
		if (typeof callback !== 'function')
			throw new Error(`EventTargetStrict.dispatchEventIfNeed("${type}", pparameter typeof = "${typeof callback}" must be "function"!`);
		let event = callback(type, eventInfo.list.size);
		this.dispatchEvent(dispatchEvent);
	}
	toStringEventTypes() {
		return Array.from(this[symbol_listeners].keys()).join(', ');
	}
	toStringEventInfo() {
		let s = '';
		for (let [type, value] of this[symbol_listeners]) {
			let evAssoc = this[symbol_listeners].get(type);
			let evJson = JSON.stringify(evAssoc);
			s += `\n${type}: ${evJson}`;
		}
		return s;
	}

	addEventListener(type, listener, options = {}) {
		let eventInfo = this.getEventTypeInfo(type);

		if (typeof (listener) !== 'function')
			throw new Error(`EventTargetStrict.addEventListener(type = "${type}", typeof listener="${typeof listener}"), required typeof "function".`);
		if (typeof options !== 'object')
			throw new Error(`EventTargetStrict.addEventListener(type = "${type}", listener, options required typeof "function" or "undefined")}.`);
		let obj = {
			type: type,
			listener: listener,
			options: options,
		};
		obj.destroy = () => {
			eventInfo.list.delete(obj);
		}
		eventInfo.list.add(obj);
		return obj;
	}
	addEventListenerAndCall(type, listener, options) {
		let obj = this.addEventListener(type, listener, options);
		listener(/* yes, no event there. */);
		return obj;
	}
	// removeEventListener(type, listener, options) {
	// 	let eventInfo = this.getEventTypeInfo(type);
	// 	eventInfo.list.delete(listener);
	// }
	removeAllEventListeners() {
		for (let [type, events] of this[symbol_listeners].entries()) {
			for (let obj of events.list.values()) {
				obj.destroy();
			}
		}
	}
	getCountEventListeners(type) {
		if (typeof type === 'undefined') {
			let count = 0;
			for (let [eventInfo2] of this[symbol_listeners].values())
				count += eventInfo2.list.size;
			return count;
		}
		let eventInfo = this.getEventTypeInfo(type);
		return eventInfo.list.size;
	}

	destroy() {
		this.removeAllEventListeners();
	}

}

export default {...};