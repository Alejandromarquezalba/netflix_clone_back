import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';
/*
interface OmdbMovieSearchResult {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Genre?: string;  
    }

    interface OmdbSearchResponse {
    Search?: OmdbMovieSearchResult[];
    totalResults: string;
    Response: "True" | "False";
    Error?: string;
    }

    interface OmdbMovieDetails {
        Title: string;
        Year: string;
        Rated: string;
        Runtime: string;
        Genre: string;  
        Plot: string;
        Poster: string;
        imdbID: string;
        }

    @Injectable()
    export class OmdbService {
    private readonly logger = new Logger(OmdbService.name);
    private omdbApiKey: string;
    private omdbBaseUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.omdbApiKey = this.configService.get<string>('OMDB_API_KEY')!;
        this.omdbBaseUrl = this.configService.get<string>('OMDB_BASE_URL') || 'https://www.omdbapi.com/';

        if (!this.omdbApiKey) {
        this.logger.error('OMDB_API_KEY no está configurada en las variables de entorno. Las peticiones a OMDb pueden fallar.');
        }
    }

    

    async searchMoviesByTitle(title: string): Promise<OmdbMovieSearchResult[]> {
        const url = this.omdbBaseUrl;
        const params = {
        s: title,
        apikey: this.omdbApiKey,
        type: 'movie',
        page: 1
        };

        try {
        const response = await lastValueFrom(
            this.httpService.get<OmdbSearchResponse>(url, { params }).pipe(
            map((res: AxiosResponse<OmdbSearchResponse>) => res.data),
            catchError(error => {
                this.logger.error(`Error al buscar películas en OMDb (título: '${title}'): ${error.message}`, error.stack);
                throw new Error('No se pudieron obtener las películas de OMDb.');
            }),
            ),
        );

        if (response.Response === 'True' && response.Search) {
            return response.Search;
        } else {
            this.logger.warn(`No se encontraron resultados para '${title}' en OMDb. Mensaje: ${response.Error || 'No error message provided.'}`);
            return [];
        }
        } catch (error) {
        throw error;
        }
    }

    
    async getMovieById(imdbId: string): Promise<OmdbMovieDetails | null> {
        const url = this.omdbBaseUrl;
        const params = {
        i: imdbId,
        apikey: this.omdbApiKey,
        plot: 'full'
        };

        try {
        const response = await lastValueFrom(
            this.httpService.get<OmdbSearchResponse>(url, { params }).pipe(
            map((res: AxiosResponse<OmdbSearchResponse>) => res.data),
            catchError(error => {
                this.logger.error(`Error al obtener detalles de película de OMDb (ID: '${imdbId}'): ${error.message}`, error.stack);
                throw new Error('No se pudieron obtener los detalles de la película.');
            }),
            ),
        );

        if (response.Response === 'True') {
            //return response;
        } else {
            this.logger.warn(`No se encontraron detalles para la película con ID '${imdbId}' en OMDb. Mensaje: ${response.Error || 'No error message provided.'}`);
            return null;
        }
        } catch (error) {
        throw error;
        }
    }
}
*/