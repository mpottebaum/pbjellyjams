package main

import (
	"embed"
	"html/template"
	"log"
	"net/http"
)

var PORT_STR = ":6969"

//go:embed templates/*
var resources embed.FS

var t = template.Must(template.ParseFS(resources, "templates/*"))

func main() {
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets/"))))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		t.ExecuteTemplate(w, "index.html", nil)
	})

	log.Println("listening on", PORT_STR)
	log.Fatal(http.ListenAndServe(PORT_STR, nil))
}
