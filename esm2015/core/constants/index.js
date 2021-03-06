/*
** constants and default values for <tag-input>
 */
export const PLACEHOLDER = '+ Tag';
export const SECONDARY_PLACEHOLDER = 'Enter a new tag';
export const KEYDOWN = 'keydown';
export const KEYUP = 'keyup';
export const FOCUS = 'focus';
export const MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
export const ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
export const KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    46: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
export const DRAG_AND_DROP_KEY = 'Text';
export const NEXT = 'NEXT';
export const PREV = 'PREV';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hpcHMvIiwic291cmNlcyI6WyJjb3JlL2NvbnN0YW50cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDbkMsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsaUJBQWlCLENBQUM7QUFDdkQsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUNqQyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsd0VBQXdFLENBQUM7QUFFMUcsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHO0lBQ3hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLEdBQUcsRUFBRSxLQUFLO0NBQ2IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQzdCLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTTtJQUN0QixFQUFFLEVBQUUsWUFBWSxDQUFDLE1BQU07SUFDdkIsRUFBRSxFQUFFLFlBQVksQ0FBQyxXQUFXO0lBQzVCLEVBQUUsRUFBRSxZQUFZLENBQUMsV0FBVztJQUM1QixDQUFDLEVBQUUsWUFBWSxDQUFDLEdBQUc7Q0FDdEIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztBQUN4QyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qKiBjb25zdGFudHMgYW5kIGRlZmF1bHQgdmFsdWVzIGZvciA8dGFnLWlucHV0PlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBQTEFDRUhPTERFUiA9ICcrIFRhZyc7XHJcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfUExBQ0VIT0xERVIgPSAnRW50ZXIgYSBuZXcgdGFnJztcclxuZXhwb3J0IGNvbnN0IEtFWURPV04gPSAna2V5ZG93bic7XHJcbmV4cG9ydCBjb25zdCBLRVlVUCA9ICdrZXl1cCc7XHJcbmV4cG9ydCBjb25zdCBGT0NVUyA9ICdmb2N1cyc7XHJcbmV4cG9ydCBjb25zdCBNQVhfSVRFTVNfV0FSTklORyA9ICdUaGUgbnVtYmVyIG9mIGl0ZW1zIHNwZWNpZmllZCB3YXMgZ3JlYXRlciB0aGFuIHRoZSBwcm9wZXJ0eSBtYXgtaXRlbXMuJztcclxuXHJcbmV4cG9ydCBjb25zdCBBQ1RJT05TX0tFWVMgPSB7XHJcbiAgICBERUxFVEU6ICdERUxFVEUnLFxyXG4gICAgU1dJVENIX1BSRVY6ICdTV0lUQ0hfUFJFVicsXHJcbiAgICBTV0lUQ0hfTkVYVDogJ1NXSVRDSF9ORVhUJyxcclxuICAgIFRBQjogJ1RBQidcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBLRVlfUFJFU1NfQUNUSU9OUyA9IHtcclxuICAgIDg6IEFDVElPTlNfS0VZUy5ERUxFVEUsXHJcbiAgICA0NjogQUNUSU9OU19LRVlTLkRFTEVURSxcclxuICAgIDM3OiBBQ1RJT05TX0tFWVMuU1dJVENIX1BSRVYsXHJcbiAgICAzOTogQUNUSU9OU19LRVlTLlNXSVRDSF9ORVhULFxyXG4gICAgOTogQUNUSU9OU19LRVlTLlRBQlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERSQUdfQU5EX0RST1BfS0VZID0gJ1RleHQnO1xyXG5leHBvcnQgY29uc3QgTkVYVCA9ICdORVhUJztcclxuZXhwb3J0IGNvbnN0IFBSRVYgPSAnUFJFVic7XHJcblxyXG4iXX0=