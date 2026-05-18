export function TwitterFollowCard ({ userName, name, isFollowing}){
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Mi avatar" src={"https://unavatar.io/github/${username}"} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <spam className='tw-followCard-infoUserName'>{userName}</spam>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}