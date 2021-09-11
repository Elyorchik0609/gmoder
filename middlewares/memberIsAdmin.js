function memberIsAdmin(ctx, next) {
  ctx.getChatMember(ctx.message.from.id)
    .then(d => {
      if (d.status === 'creator' || d.status === 'administrator') return next();
    });
  return;
}

module.exports = memberIsAdmin;