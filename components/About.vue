<template lang="pug">
.container 
    .left
        h1 what is smart gate ?
        p we have developed a smart gate system for universities that incorprates deep learning and image processing techniques with the use of the raspberry pi
        p we have created a robust Automatic Number Plate Recognition (ANPR) system that only permits registerd cars to enter, ensuring both security and functionality
    .right 
        section
            .le
                img(:src="security")
            .rig 
                h3 security 
                p preventing unautherized entry and maintains a secure environment for students, staff, and visitors
        section
            .le
                img(:src="time")
            .rig 
                h3 time saving 
                p reduces waiting time by eliminating maual inspections
        section 
            .le 
                img(:src="sc")
            .rig 
                h3 scalability 
                p can be easily expanded and integrated with existing campussecurity system
</template>

<script setup lang="ts">
const security = ref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFsSURBVHgB7ZZBUoMwGEa/n1TXPYIegx1H8AB15AZ4FU8gVff2BuLUmS69gkdwpyNCJIRgyBBIh3/Zt2gytM0rr4QBOOFBvqfrcp8mYCIK/eDvd/WMVf1S7jcJGAgSfx3SC4ASNZciugIDQWJRVYmZE+EGDASJSQxka47cs2I7MyTt2oEh96z4P7MsQNWdmnHknhWbzBRRfhY/FZD4BEPuSbGdWdTRqxolsG3HhbknxXZmivMPNSOqd3pclntSbGc2x7hye8VjmQ0cuVfq5eftOiVB98O3aqPpMxt07ijrct+6i46v130XSFfxw1afsYAXO7NhLrdzwxnSNW7P+Dx+zJshxxGo3M2vz7rchTmu/6I60YtHl24tx388vqt7bCewin25x3YCq1jhXt1TO4FV7OYOzbxY7OYOzbxYrDC5ISgLzcwiNrmbSXcXm8/MIrZya39AZhaxos+NsMxs4j53YGZWysMmUQ/9OOHhD4Zwp17eElzEAAAAAElFTkSuQmCC')
const time = ref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK/SURBVHgBxZZdchJBEMe7Z4YYq3yIJwg5QfApRXyBG5j3yMcJ5AZsTqCeQMS86w0glZRUniQnCJ5AHiwJsEw7PfvBArvAktX8q6hldmf7N73T090ATySEHTW5eVsjxLwx8Au1uFMvoI+vWsNt398KPL2ulVC6B+r08lt4r1eh1ZnURcCWKrY/b7KJm4Cg9Hvzt2B+w1yx/XIZTAQfEenYmCpFjA4kiDIWW4Mk2yIReltpGmiHoWwIBTTi5u2dthu54peyC+KIgOpmNQPzy7ug783imkn2MRGqwbED45F6Lpzl/Qs8Nl9hxYZ5xu8GUMfMuVieIxKhBEMU+ixnPEoTNP5iHCR9xjYYHOf5AnhyUysEnqLUdXUyD6a04kBE0HV/6Eyvz0uJYJD6q71quHgMNArnrfIG2IwF87k0m8XncpB73XYgI6mxcDjgOOqjXodglFD17ziQobDcGmqiFa8tmDq1g+AcSi2uIGM9G8uWv4wS/WCWD3b3bYIAm3nWHPpdxV6zbcv67RZC8IxmdkCEd/CPpAl/WobJ73xVdkWEB5xKyDt3qRSfs5MVgAXsKC9S00squOer7zENOHtKgYfbGtgrto/gEbIeo2Qwe6Hz8J9kwepB9b3hPNyzFvVq+RVwNNzHo1kNMhZnRS6Tbq9SXQD7a7KlSyG+y9xr6WesCC38mytedtlrW8RHsyZkJC6zQQ1QJ/OWaOk4eV4DYsO9nX+WXeV+P38TlFluhaLPFsCe12DhpOGDfXFXqFk4gfhkB6bMLqfi+NZni9YlSRwf7piaJg02AmhcmU3sMqNw9LKUYz7XVVIRYeD0j66ab9jgPV0HXQtmjczZk6A7oSEP0eWFzLSX9KWgQwLkIlOIzuF48bcOUoMDTXq2O6lGe+d4bQamAodmef8e3AKhOKYZ2Oae8zynXLWv+mm70SfRX9HJPDFqzSrPAAAAAElFTkSuQmCC')
const sc = ref('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI8SURBVHgB5VVdbtNAEJ5Zb1L1zUdwToD7UsmoSMk1kADfgOYE9AaBG0QFIW6RSFQU8RL3BPgIfqtI1rvMWK7j9V+aOAip/aQkzs58np3Zmf0AnhuwzWBuQ08p8AxCMryYR7AHHsOtBV7fhD466YxM45JT7ICYYDCPoQP7cK3A97RTafSKVl0wkACayAB65OSROTGOmgzPvzZmsC9XlMkO6EVO/CRPxWgQfJ4Mg+sR/yezi6kzgxbsyy0yXv+iMqV6xaWRTCjBLEJXnejf/GIJYlQt2yHcImNMabfsCCauZoOTeVY6flZKeTX7AdwisKLd5q6+WYUuHBF81tnviUxqgU+zEpglPbrqPv0ARwAnsPn5bsYNxscwPN+OltXV65vXPgqZNQk7WqUz6OfNE1HpEjsEcoV8+tC6iRo4iURxVu6N2hzzWHCH5mNwBJilSZ1p9SJpvbmy7B2xPWsjZuTt0210iUbflX1TysxB5HGhl+vpw7oEFWPwLW56v4QWDC/si2Jz+ybhfeJG3w1efVnatpC+Ne8uGQS2rQ0C/hOeX+DWM36Qtu2CdrkVUwf9zffQ9tX6BXIKBl2yjYv1vrLYBwfLImy3336BUKY8alVOlyxapa5I2xWezYsANE6LrAqpnjaM0xgyrolYDi3bj7cf6Z3vc1ksbEVzZdKW36mDl9eX5aB9IP+Iq6wStGnum1rgLmnrg96y2CRtfbg7ZbFL2vpwd8tih7T14T5SFpulrQ93pyx2Sdu/4D5d/AXJPJwYIUWlMwAAAABJRU5ErkJggg==')
</script>

<style scoped lang="scss">
.container{
    margin-top: 30px;
    p{
        color: #A6A6A6;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    .left{
        p {
            margin-top: 20px;
        }
    }
    .right{
        section{
            display: flex;
            align-items: baseline;
            margin-top: 15px;
            .le{
                margin-right: 10px;
                height: 30px;
                width: 30px;
            }
        }
    }
}
</style>