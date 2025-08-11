package org.theoneclick.demo

@OptIn(ExperimentalJsExport::class)
@JsExport
class Calculator {
    fun add(a: Int, b: Int): Int = a + b
}