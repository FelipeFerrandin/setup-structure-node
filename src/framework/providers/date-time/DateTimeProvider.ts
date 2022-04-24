import moment from "moment";

export default class DateTimeProvider {
    static getDateByStringTime(aTime: string) {
        return moment(aTime, 'HH:mm').toDate()
    }

}
