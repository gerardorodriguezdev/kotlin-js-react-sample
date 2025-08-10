package org.theoneclick.demo

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform