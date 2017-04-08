async function getUserInfo(ctx) {
    ctx.body = {
        name: 'Sumo',
        gender: 'female',
    }
}

export default {getUserInfo}
