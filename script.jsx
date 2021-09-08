class Media {
    constructor(title) {
        this._title = title
        this._isCheckedOut = false
        this._ratings = []
    }
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get ratings() {
        return this._ratings
    }
    set isCheckedOut(newIsCheckedOut) {
        this._isCheckedOut = newIsCheckedOut
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut
    }
    //Below is the method which will get the average ratings of a product 
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) =>
            currentSum + rating, 0)
    }
    addRating(rating) {
        this.ratings.push(rating)
    }
}