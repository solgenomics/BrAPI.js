/** `GET /calls`
 * @alias BrAPINode.prototype.calls
 * @param {Object} params Parameters to provide to the call
 * @param {String} [behavior="fork"] Behavior of the node
 * @return {BrAPI_Behavior_Node}
 */
export function calls (params,behavior){
    var call = {
        'defaultMethod': 'get',
        'urlTemplate': '/calls',
        'params': params,
        'behaviorOptions': ['fork','map'],
        'behavior': behavior,
    }
    this.version.check(call.urlTemplate,{
        introduced:"v1.0"
    });
    return this.simple_brapi_call(call);
}
