"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("nativescript-angular/zone-js/testing.jasmine");
var testing_1 = require("nativescript-angular/testing");
var testing_2 = require("@angular/core/testing");
var btc_service_1 = require("~/services/btc.service");
var addresses_component_1 = require("~/home/addresses.component");
var http_1 = require("@angular/common/http");
testing_1.nsTestBedInit();
describe("AddressesComponent", function () {
    beforeEach(testing_1.nsTestBedBeforeEach([addresses_component_1.AddressesComponent], [btc_service_1.BtcService, http_1.HttpClient, http_1.HttpHandler]));
    afterEach(testing_1.nsTestBedAfterEach(false));
    it('Component should exist', testing_2.async(function () {
        return testing_1.nsTestBedRender(addresses_component_1.AddressesComponent).then(function (fixture) {
            var componentRef = fixture.componentRef;
            expect(componentRef).toBeUndefined();
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkcmVzc2VzLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXNEO0FBQ3RELHdEQUtzQztBQUV0QyxpREFBOEM7QUFFOUMsc0RBQW9EO0FBQ3BELGtFQUFnRTtBQUNoRSw2Q0FBK0Q7QUFDL0QsdUJBQWEsRUFBRSxDQUFDO0FBRWhCLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUM3QixVQUFVLENBQUMsNkJBQW1CLENBQUMsQ0FBQyx3Q0FBa0IsQ0FBQyxFQUFFLENBQUMsd0JBQVUsRUFBRSxpQkFBVSxFQUFFLGtCQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsU0FBUyxDQUFDLDRCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFckMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLGVBQUssQ0FBQztRQUNqQyxPQUFPLHlCQUFlLENBQUMsd0NBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO1lBQ3RELElBQU0sWUFBWSxHQUFxQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQzVFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3pvbmUtanMvdGVzdGluZy5qYXNtaW5lXCI7XHJcbmltcG9ydCB7XHJcbiAgbnNUZXN0QmVkSW5pdCxcclxuICBuc1Rlc3RCZWRCZWZvcmVFYWNoLFxyXG4gIG5zVGVzdEJlZEFmdGVyRWFjaCxcclxuICBuc1Rlc3RCZWRSZW5kZXJcclxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvdGVzdGluZ1wiO1xyXG5cclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS90ZXN0aW5nXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJ0Y1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9idGMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBZGRyZXNzZXNDb21wb25lbnQgfSBmcm9tIFwifi9ob21lL2FkZHJlc3Nlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhhbmRsZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxubnNUZXN0QmVkSW5pdCgpO1xyXG5cclxuZGVzY3JpYmUoXCJBZGRyZXNzZXNDb21wb25lbnRcIiwgKCkgPT4ge1xyXG4gIGJlZm9yZUVhY2gobnNUZXN0QmVkQmVmb3JlRWFjaChbQWRkcmVzc2VzQ29tcG9uZW50XSwgW0J0Y1NlcnZpY2UsIEh0dHBDbGllbnQsIEh0dHBIYW5kbGVyXSkpO1xyXG4gIGFmdGVyRWFjaChuc1Rlc3RCZWRBZnRlckVhY2goZmFsc2UpKTtcclxuXHJcbiAgaXQoJ0NvbXBvbmVudCBzaG91bGQgZXhpc3QnLCBhc3luYygoKSA9PiB7XHJcbiAgICByZXR1cm4gbnNUZXN0QmVkUmVuZGVyKEFkZHJlc3Nlc0NvbXBvbmVudCkudGhlbigoZml4dHVyZSkgPT4ge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxBZGRyZXNzZXNDb21wb25lbnQ+ID0gZml4dHVyZS5jb21wb25lbnRSZWY7XHJcbiAgICAgIGV4cGVjdChjb21wb25lbnRSZWYpLnRvQmVVbmRlZmluZWQoKTtcclxuICAgICBcclxuICAgIH0pO1xyXG4gIH0pKTtcclxufSk7Il19