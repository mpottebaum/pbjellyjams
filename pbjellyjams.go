package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

var tmp *template.Template
var PORT_STR = ":6969"

func loadTemplate() {
	t, err := template.ParseFiles("index.html")
	if err != nil {
		panic(err)
	}
	tmp = t
}

func rootHandler(writer http.ResponseWriter, request *http.Request) {
	tmp.Execute(writer, nil)
}

func main() {
	loadTemplate()
	http.Handle(
		"/assets/",
		http.StripPrefix(
			"/assets/",
			http.FileServer(http.Dir("./assets/")),
		),
	)
	http.HandleFunc("/", rootHandler)

	fmt.Printf("we are active on port %s\n\n", PORT_STR)
	err := http.ListenAndServe(PORT_STR, nil)
	if err != nil {
		log.Fatal(err)
		fmt.Printf("err errywerr bruh: %s", err.Error())
	}
}
