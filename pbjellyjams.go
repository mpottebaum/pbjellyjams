package main

import (
	"embed"
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"pbjellyjams/termhanks"
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

	http.HandleFunc("/itty-bitty-ditties", func(w http.ResponseWriter, r *http.Request) {
		t.ExecuteTemplate(w, "ibd.html", nil)
	})

	http.HandleFunc("/term-hanks", func(w http.ResponseWriter, r *http.Request) {
		t.ExecuteTemplate(w, "term-hanks.html", nil)
	})

	http.HandleFunc("/termias-hankas/{panelname}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		panelname := r.PathValue("panelname")
		panel, exists := termhanks.Panels[panelname]
		if !exists {
			w.WriteHeader(http.StatusNotFound)
			resp := map[string]string{
				"error": "that panel doesn't exist, my man",
			}
			json.NewEncoder(w).Encode(resp)
			return
		}

		data, err := json.Marshal(panel)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			resp := map[string]string{
				"error": "my bad bro the jsonification did not go well dog",
			}
			json.NewEncoder(w).Encode(resp)
			return
		}

		w.Write(data)
	})

	log.Println("listening on", PORT_STR)
	log.Fatal(http.ListenAndServe(PORT_STR, nil))
}
