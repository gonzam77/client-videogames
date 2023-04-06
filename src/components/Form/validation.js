export default function validation({ name, description, image, platforms, rating, released, genres }) {
    var errors = {
        name: "",
        description: "",
        image: "",
        platforms: "",
        rating: "",
        released: "",
        genres: "",
    }

    if (!name) {
        errors.image = "A name is needed"
    }
    if (!image) {
        errors.image = "A image is needed"
    }
    if (!rating) {
        errors.rating = "A rating is needed"
    }
    if (Number(rating) > 10) {
        errors.rating = "Rating have to be less than 10."
    }

    if (Number(rating) * 10 !== Math.floor(Number(rating) * 10)) {
        errors.rating = "Rating have to be a decimal or integer number"
    }
    if (!released) {
        errors.released = "A released is needed"
    }
    if (!platforms.length) {
        errors.platforms = "A platforms is needed"
    }
    if (!genres.length) {
        errors.genres = "A platforms is needed"
    }
    if (!description) {
        errors.description = "A description is needed";
    }
    if (name.length < 3) {
        errors.name = "Invalid name";
    }
    if (description.length < 10) {
        errors.description = "Must have more than 10 characters"
    }

    return errors
}

